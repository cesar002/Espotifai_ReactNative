import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import loginSlice from '@redux/slices/loginSlice';
import searchSlice from '@redux/slices/searchSlice';
import artistaSlice from '@redux/slices/artistaSlice';
import trackSlice from '@redux/slices/trackSlice';
import albumSlice from '@redux/slices/albumSlice';
import userSlice from '@redux/slices/usersSlice';
import netStatusSlice from '@redux/slices/netStatusSlice';
import sagas from '@redux/saga';

import SearchRepositoryImpl from '@core/data/repositoriesImpl/SearchRepositoryImpl';
import AlbumRepositoryImpl from '@core/data/repositoriesImpl/AlbumRepositoryImpl';
import ArtistaRepositoryImpl from '@core/data/repositoriesImpl/ArtistaRepositoryImpl';
import TrackRepositoryImpl from '@core/data/repositoriesImpl/TrackRepositoryImpl';

const searchRepository: SearchRepositoryImpl = new SearchRepositoryImpl();
const albumRepository: AlbumRepositoryImpl = new AlbumRepositoryImpl();
const artistaRepository: ArtistaRepositoryImpl = new ArtistaRepositoryImpl();
const trackRepository: TrackRepositoryImpl = new TrackRepositoryImpl();

const sagaMiddleware = createSagaMiddleware({
    context:{
        searchRepository,
        albumRepository,
        artistaRepository,
        trackRepository
    }
})
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        login: loginSlice,
        search: searchSlice,
        artista: artistaSlice,
        track: trackSlice,
        album: albumSlice,
        user: userSlice,
        netStatus: netStatusSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleware),
})

sagaMiddleware.run(sagas)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;