import SearchResult, { ISearchAlbum, ISearchArtista, ISearchTrack } from "@core/data/models/SearchResult";

interface ISearchRepository{
    getSearch(text: string, offset: number): Promise<SearchResult>
    getSearchArtistas(text: string, offset: number): Promise<ISearchArtista>
    getSearchAlbums(text: string, offset: number): Promise<ISearchAlbum>
    getSearchTracks(text: string, offset: number): Promise<ISearchTrack>
}

export default ISearchRepository;