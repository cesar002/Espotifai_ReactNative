import { call, takeLatest, put, getContext } from 'redux-saga/effects';

import Track from '@core/data/models/Track';
import { setStatus, setTrack } from '@redux/slices/trackSlice';

function* fetchTrack(action: any){
    try {
        const trackRepository = yield getContext('trackRepository');

        const track: Track = yield call(trackRepository.getTrack, action.payload);
        
        yield put(setTrack({
            track
        }));
        yield put(setStatus({
            start: false,
            finish: true,
            success: true,
            fail: false
        }));
    } catch (error) {
        yield put(setStatus({
            start: false,
            finish: true,
            success: false,
            fail: true
        }));
        console.error('fetchTrack', error)
    }
}


export default function* trackSaga(){
    yield takeLatest('track/fetchTrack', fetchTrack);
}