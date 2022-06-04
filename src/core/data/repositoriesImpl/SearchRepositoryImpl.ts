import ISearchRepository from "@core/domain/repositories/ISearchRepository";
import SearchResult from "../models/SearchResult";
import HttpClient from "@http/httpClient";

class SearchRepositoryImpl implements ISearchRepository {

    public async getSearch(text: string, offset: number = 0): Promise<SearchResult> {
        const response = await HttpClient.get(`/search?q=${text}&type=album,artist,track&offset=${offset}`);

        const cosa =  response.data;
        console.log(cosa.artists.items[0])
        const searchResult = response.data;

        return searchResult;
    }
    
}

export default SearchRepositoryImpl;