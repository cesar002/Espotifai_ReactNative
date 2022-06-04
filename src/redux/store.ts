import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import loginSlice from '@redux/slices/loginSlice';
import searchSlice from '@redux/slices/searchSlice';
import sagas from '@redux/saga';

import SearchRepositoryImpl from '@core/data/repositoriesImpl/SearchRepositoryImpl';

const searchRepository: SearchRepositoryImpl = new SearchRepositoryImpl();

const sagaMiddleware = createSagaMiddleware({
    context:{
        searchRepository,
    }
})
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        login: loginSlice,
        search: searchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleware),
})

sagaMiddleware.run(sagas)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;