import SearchResult from "@core/data/models/SearchResult";

interface ISearchRepository{
    getSearch(text: string, offset: number): Promise<SearchResult>
}

export default ISearchRepository;