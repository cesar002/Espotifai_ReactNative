import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Track from '@core/data/models/Track';
import Album from '@core/data/models/Album';
import Artista from '@core/data/models/Artista';

interface ISearchItem {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface ISearchTrack extends ISearchItem {
    items: Track[];
}

export interface ISearchAlbum extends ISearchItem {
    items: Album[];
}

export interface ISearchArtista extends ISearchItem {
    items: Artista[];
}

export interface ISearchState {
    albums?: ISearchAlbum | null;
    artists?: ISearchArtista | null;
    tracks?: ISearchTrack | null;
}

const initialState: ISearchState = {
    albums: null,
    artists: null,
    tracks: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search(state: ISearchState, action: PayloadAction<string>){},
        setSearchResult(state: ISearchState, action: PayloadAction<ISearchState>){
            state = action.payload;
        },
    }
});

export const { search, setSearchResult } = searchSlice.actions;
export default searchSlice.reducer;