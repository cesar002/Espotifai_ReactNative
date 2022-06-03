import { call, takeLatest, put, getContext } from 'redux-saga/effects';

import { setSearchResult } from '@redux/slices/searchSlice';

import AlbumRepositoryImpl from '@core/data/repositoriesImpl/AlbumRepositoryImpl';
import ArtistaRepositoryImpl from '@core/data/repositoriesImpl/ArtistaRepositoryImpl';
import TrackRepositoryImpl from '@core/data/repositoriesImpl/TrackRepositoryImpl';
import SearchArtista from '@core/data/models/SearchArtista';
import SearchAlbum from '@core/data/models/SearchAlbum';
import SearchTrack from '@core/data/models/SearchTrack';


function* search(action: any){
    try {
        const artistaRepo: ArtistaRepositoryImpl  = yield getContext("artistaRepository");
        const albumRepo: AlbumRepositoryImpl  = yield getContext("albumRepository");
        const trackRepo: TrackRepositoryImpl  = yield getContext("trackRepository");
        
        const artists: SearchArtista = yield call(artistaRepo.getArtistas, action.text);
        const albums: SearchAlbum = yield call(albumRepo.getAlbums, action.text);
        const tracks: SearchTrack = yield call(trackRepo.getTracks, action.text);

        yield put(setSearchResult({
            albums,
            artists,
            tracks
        }));
    } catch (error) {
        console.error(error)
    }
}

export default function* SearchSaga() {
    yield takeLatest('search/search', search);
}