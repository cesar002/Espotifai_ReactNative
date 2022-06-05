import Artista from '@core/data/models/Artista'
import { ISearchAlbum } from '@core/data/models/SearchResult';
import Track from '@core/data/models/Track';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFetchStatus{
    start?: boolean;
    finish?: boolean;
    success?: boolean;
    fail?: boolean;
}

export interface IArtistaState{
    artista: Artista | null;
    albums: ISearchAlbum | null;
    topTracks: Track[] | null; 
    status: IFetchStatus;
}

const initialState: IArtistaState = {
    artista: null,
    albums: null,
    topTracks: null,
    status: {
        start: false,
        success: false,
        finish: false,
        fail: false,
    }
}

const artistaSlice = createSlice({
    name: 'artista',
    initialState,
    reducers: {
        fetchArtista(state: IArtistaState, action: PayloadAction<string>){
            state.status = {
                ...initialState.status,
                start: true,
            }
        },
        setArtista(state: IArtistaState, action: PayloadAction<IArtistaState>){
            state.albums = action.payload.albums;
            state.artista = action.payload.artista;
            state.topTracks = action.payload.topTracks
            state.status = {
                ...state.status,
                ...action.payload.status,
            }
        },
        setStatus(state: IArtistaState, action: PayloadAction<IFetchStatus>){
            state.status = {
                ...state.status,
                ...action.payload,
            };
        },
    }
});

export const { fetchArtista, setArtista, setStatus } = artistaSlice.actions;
export default artistaSlice.reducer