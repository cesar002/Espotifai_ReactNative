import Album from '@core/data/models/Album';

interface IAlbumRepository {
    getAlbum(id: string): Promise<Album>;
}

export default IAlbumRepository;