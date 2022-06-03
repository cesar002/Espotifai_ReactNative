import Album from '@core/data/models/Album';
import SearchAlbum from '@core/data/models/SearchAlbum';

interface IAlbumRepository {
    getAlbum(id: string): Promise<Album>;
    getAlbums(text: string, offset:number): Promise<SearchAlbum>
}

export default IAlbumRepository;