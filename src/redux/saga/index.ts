import { all } from 'redux-saga/effects';

import LoginSpotifySaga from './sagas/loginSpotifySaga';


export default function* mainSaga() {
	yield all([
        LoginSpotifySaga(),
	])
}