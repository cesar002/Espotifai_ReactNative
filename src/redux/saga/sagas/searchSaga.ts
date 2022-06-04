import { call, takeLatest, put, getContext } from 'redux-saga/effects';
import { setSearchResult } from '@redux/slices/searchSlice';
import SearchResult from '@core/data/models/SearchResult';



function* search(action: any){
    try {
        if(!action.payload){ return; }

        const searchRepository  = yield getContext("searchRepository");     
        const searchResult: SearchResult = yield call(searchRepository.getSearch, action.payload);

        yield put( setSearchResult(searchResult) )
    } catch (error) {
        console.error('SearchSaga', error)
    }
}

export default function* SearchSaga() {
    yield takeLatest('search/search', search);
}