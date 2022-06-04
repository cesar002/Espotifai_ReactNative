import { call, takeLatest, put, getContext, select } from 'redux-saga/effects';
import { setSearchResult, setText, updateAlbumsResult, updateArtistasResult, updateTracksResult } from '@redux/slices/searchSlice';
import SearchResult, { ISearchAlbum, ISearchArtista, ISearchTrack } from '@core/data/models/SearchResult';
import { RootState } from '@redux/store';

const getTextSearch = (state: RootState) => state.search.text;

function* search(action: any){
    try {
        if(!action.payload){ return; }

        const searchRepository  = yield getContext("searchRepository");     
        const searchResult: SearchResult = yield call(searchRepository.getSearch, action.payload);

        yield put(setText(action.payload));
        yield put( setSearchResult(searchResult) )
    } catch (error) {
        console.error('SearchSaga', error)
    }
}

function* loadMoreArtistas(action: any){
    try {
        if(!action.payload){ return; }

        const textSearch = yield select(getTextSearch);

        const searchRepository  = yield getContext("searchRepository"); 
        const searchResult: ISearchArtista = yield call(searchRepository.getSearchArtistas, textSearch, action.payload)

        yield put(updateArtistasResult(searchResult));
    } catch (error) {
        console.error('loadMoreArtistas', error)
    }
}

function* loadMoreAlbums(action){
    try {
        if(!action.payload){ return; }

        const textSearch = yield select(getTextSearch);

        const searchRepository  = yield getContext("searchRepository"); 
        const searchResult: ISearchAlbum = yield call(searchRepository.getSearchAlbums, textSearch, action.payload);

        yield put(updateAlbumsResult(searchResult));
    } catch (error) {
        console.error('loadMoreAlbums', error)
    }
}

function* loadMoreTracks(action){
    try {
        if(!action.payload){ return; }

        const textSearch = yield select(getTextSearch);

        const searchRepository  = yield getContext("searchRepository"); 
        const searchResult: ISearchTrack = yield call(searchRepository.getSearchTracks, textSearch, action.payload);

        yield put(updateTracksResult(searchResult));
    } catch (error) {
        console.error('loadMoreTracks', error)
    }
}

export default function* SearchSaga() {
    yield takeLatest('search/search', search);
    yield takeLatest('search/loadMoreArtistas', loadMoreArtistas);
    yield takeLatest('search/loadMoreAlbums', loadMoreAlbums);
    yield takeLatest('search/loadMoreTracks', loadMoreTracks);
}