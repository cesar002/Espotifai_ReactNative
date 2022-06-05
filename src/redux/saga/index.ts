import { all } from 'redux-saga/effects';

import LoginSpotifySaga from './sagas/loginSpotifySaga';
import SearchSaga from './sagas/searchSaga';
import ArtistaSaga from './sagas/artistaSaga';
import TrackSaga from './sagas/trackSaga';
import AlbumSaga from './sagas/albumSaga';


export default function* mainSaga() {
	yield all([
        LoginSpotifySaga(),
		SearchSaga(),
		ArtistaSaga(),
		TrackSaga(),
		AlbumSaga(),
	])
}