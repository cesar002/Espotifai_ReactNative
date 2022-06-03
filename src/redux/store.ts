import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import loginSlice from '@redux/slices/loginSlice';
import searchSlice from '@redux/slices/searchSlice';
import sagas from '@redux/saga';

import AlbumRepositoryImpl from '@core/data/repositoriesImpl/AlbumRepositoryImpl';
import ArtistaRepositoryImpl from '@core/data/repositoriesImpl/ArtistaRepositoryImpl';
import TrackRepositoryImpl from '@core/data/repositoriesImpl/TrackRepositoryImpl';

const albumRepository = new AlbumRepositoryImpl();
const artistaRepository = new ArtistaRepositoryImpl();
const trackRepository = new TrackRepositoryImpl();

const sagaMiddleware = createSagaMiddleware({
    context:{
        albumRepository, artistaRepository, trackRepository
    }
})
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        login: loginSlice,
        search: searchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(sagas)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;