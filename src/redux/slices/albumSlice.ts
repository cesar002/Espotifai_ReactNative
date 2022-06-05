import Album from '@core/data/models/Album'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IFetchStatus{
    start?: boolean;
    finish?: boolean;
    success?: boolean;
    fail?: boolean;
}

export interface IAlbumState {
    album: Album | null;
    status: IFetchStatus;
}

const initialState: IAlbumState = {
    album: null,
    status: {
        start: false,
        finish: false,
        success: false,
        fail: false,
    }
}

const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        fetchAlbum(state: IAlbumState, action: PayloadAction<string>){
            state.status = {
                start: true,
                finish: false,
                success: false,
                fail: false,
            }
        },
        setAlbum(state: IAlbumState, action: PayloadAction<IAlbumState>){
            state.album = action.payload.album;
            state.status = action.payload.status;
        },
        setStatus(state: IAlbumState, action: PayloadAction<IFetchStatus>){
            state.status = {
                ...action.payload
            }
        },
    }
});

export const { fetchAlbum, setAlbum, setStatus } = albumSlice.actions;
export default albumSlice.reducer;