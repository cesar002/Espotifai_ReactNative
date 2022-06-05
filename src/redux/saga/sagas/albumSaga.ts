import { call, takeLatest, put, getContext } from 'redux-saga/effects';
import Album from '@core/data/models/Album';
import { setAlbum, setStatus } from '@redux/slices/albumSlice';

function* fetchAlbum(action: any){
    try {
        const albumRepository = yield getContext('albumRepository');

        const album: Album = yield call(albumRepository.getAlbum, action.payload);
        yield put(setAlbum({
            album,
            status: {
                start: false,
                finish: true,
                success: true,
                fail: false,
            }
        }));
    } catch (error) {
        yield put(setStatus({
            start: false,
            finish: true,
            success: false,
            fail: true,
        }));
        console.error('fetchAlbum', error);
    }
}

export default function* albumSaga(){
    yield takeLatest('album/fetchAlbum', fetchAlbum);
}