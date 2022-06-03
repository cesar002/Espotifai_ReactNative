import Album from '@core/data/models/Album';

interface IAlbumRepository {
    getAlbum(id: string): Promise<Album>;
    getAlbums(text: string, offset:number): Promise<Album[]>
}

export default IAlbumRepository;