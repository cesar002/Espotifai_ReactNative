import { call, takeLatest, put, getContext } from 'redux-saga/effects';

import Artista from '@core/data/models/Artista';
import { ISearchAlbum } from '@core/data/models/SearchResult';
import { IArtistaState, setArtista, setStatus } from '@redux/slices/artistaSlice';
import Track from '@core/data/models/Track';

function* fetchArtista(action: any){
    try {
        const albumRepository = yield getContext('albumRepository');
        const artistaRepository = yield getContext('artistaRepository');
        const trackRepository = yield getContext('trackRepository');
        console.log(action.payload);
        const artista: Artista = yield call(artistaRepository.getArtista, action.payload);
        const albums: ISearchAlbum = yield call(albumRepository.getAlbumsByArtistaId, action.payload);
        const topTracks: Track[] = yield call(trackRepository.getTopTracksArtista, action.payload);

        yield put(setArtista({
            albums,
            artista,
            topTracks,
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
        console.error('fetchArtistaSaga', error);
    }
}

export default function* artistaSaga(){
    yield takeLatest('artista/fetchArtista', fetchArtista);
}