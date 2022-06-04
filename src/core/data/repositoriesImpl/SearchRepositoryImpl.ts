import ISearchRepository from "@core/domain/repositories/ISearchRepository";
import SearchResult, { ISearchAlbum, ISearchArtista, ISearchTrack } from "../models/SearchResult";
import HttpClient from "@http/httpClient";

class SearchRepositoryImpl implements ISearchRepository {

    public async getSearch(text: string, offset: number = 0): Promise<SearchResult> {
        const response = await HttpClient.get(`/search?q=${text}&type=album,artist,track&offset=${offset}`);

        const searchResult: SearchResult = response.data;

        return searchResult;
    }

    public async getSearchArtistas(text: string, offset: number): Promise<ISearchArtista> {
        const response = await HttpClient.get(`/search?q=${text}&type=artist&offset=${offset}`);

        const searchResult: ISearchArtista = response.data.artists;

        return searchResult;
    }

    public async getSearchAlbums(text: string, offset: number): Promise<ISearchAlbum> {
        const response = await HttpClient.get(`/search?q=${text}&type=album&offset=${offset}`);

        const searchResult: ISearchAlbum = response.data.albums;

        return searchResult;
    }
    public async getSearchTracks(text: string, offset: number): Promise<ISearchTrack> {
        const response = await HttpClient.get(`/search?q=${text}&type=track&offset=${offset}`);

        const searchResult: ISearchTrack = response.data.tracks;

        return searchResult;
    }
    

    
}

export default SearchRepositoryImpl;