import Album from '@core/data/models/Album';
import { ISearchAlbum } from '@core/data/models/SearchResult';

interface IAlbumRepository {
    getAlbum(id: string): Promise<Album>;
    getAlbumsByArtistaId(id: string): Promise<ISearchAlbum>
}

export default IAlbumRepository;