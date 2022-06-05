import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchAlbum, ISearchArtista, ISearchTrack } from '@core/data/models/SearchResult';


export interface ISearchState {
    albums: ISearchAlbum | null;
    artists: ISearchArtista | null;
    tracks: ISearchTrack | null;
    text?: string | null;
    isLoading: boolean;
}


const initialState: ISearchState = {
    albums: null,
    artists: null,
    tracks: null,
    text: null,
    isLoading: false,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setText(state: ISearchState, action: PayloadAction<string>){
            state.text = action.payload;
        },
        search(state: ISearchState, action: PayloadAction<string>){
            state.isLoading = true;
        },
        setSearchResult(state: ISearchState, action: PayloadAction<ISearchState>){
            state.tracks = action.payload.tracks;
            state.albums = action.payload.albums;
            state.artists = action.payload.artists;
            state.isLoading = false;
        },
        emptySearch(state: ISearchState){
            state.albums = initialState.albums;
            state.artists = initialState.artists;
            state.tracks = initialState.tracks;
            state.text = null;
        },
        loadMoreArtistas(state: ISearchState, action: PayloadAction<number>){},  
        loadMoreAlbums(state: ISearchState, action: PayloadAction<number>){},
        loadMoreTracks(state: ISearchState, action: PayloadAction<number>){},
        updateArtistasResult(state, action: PayloadAction<ISearchArtista>){
            state.artists = {
                ...action.payload,
                items: [
                    ...state.albums.items,
                    ...action.payload.items
                ],
                
            }
        },
        updateAlbumsResult(state, action: PayloadAction<ISearchAlbum>){
            state.albums = {
                ...action.payload,
                items: [
                    ...state.albums.items,
                    ...action.payload.items,
                ]
            }
        },
        updateTracksResult(state, action: PayloadAction<ISearchTrack>){
            state.tracks = {
                ...action.payload,
                items: [
                    ...state.tracks.items,
                    ...action.payload.items
                ]
            }
        }
    }
});

export const { 
    search, setSearchResult, emptySearch, 
    loadMoreArtistas, updateArtistasResult, setText,
    loadMoreAlbums, loadMoreTracks, 
    updateAlbumsResult, updateTracksResult
} = searchSlice.actions;
export default searchSlice.reducer;