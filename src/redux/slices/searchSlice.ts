import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import SearchResult from '@core/data/models/SearchResult';

const initialState: SearchResult = {
    albums: null,
    artists: null,
    tracks: null,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search(state: SearchResult, action: PayloadAction<string>){},
        setSearchResult(state: SearchResult, action: PayloadAction<SearchResult>){
            state.tracks = action.payload.tracks;
            state.albums = action.payload.albums;
            state.artists = action.payload.artists;
        },
        emptySearch(state: SearchResult){
            state.albums = initialState.albums;
            state.artists = initialState.artists;
            state.tracks = initialState.tracks;
        }
    }
});

export const { search, setSearchResult, emptySearch } = searchSlice.actions;
export default searchSlice.reducer;