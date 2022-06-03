import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import loginSlice from '@redux/slices/loginSlice';
import sagas from '@redux/saga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        login: loginSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(sagas)

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;