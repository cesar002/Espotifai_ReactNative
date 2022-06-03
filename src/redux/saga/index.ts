import { all } from 'redux-saga/effects';

import LoginSpotifySaga from './sagas/loginSpotifySaga';
import SearchSaga from './sagas/searchSaga';


export default function* mainSaga() {
	yield all([
        LoginSpotifySaga(),
		SearchSaga(),
	])
}