import { call, takeLatest, put } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import base64 from 'react-native-base64';

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '@env';
import { 
    finishLogin,
    setLoginData,
    setStatusLogin
} from '@redux/slices/loginSlice';


function* loginSpotify(){
    try {
        const credentials = base64.encode(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET);

        const response: AxiosResponse = yield call(axios.post, 'https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers:{
                Authorization : `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }); 

        yield put(setLoginData({
            ...response.data
        }))
        yield put(setStatusLogin({
            success: true,
            fail: false
        }))
    } catch (error: any) {
        yield put(setStatusLogin({
            success: false,
            fail: true
        }))
        console.error(error);
    }finally{
        yield put(finishLogin());
    }
}

export default function* LoginSpotifySaga() {
    yield takeLatest('login/startLogin', loginSpotify);
}