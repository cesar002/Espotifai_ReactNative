import IAlbumRepository from "@core/domain/repositories/IAlbumRepository";
import Album from "../models/Album";
import HttpClient from "@http/httpClient";
import SearchAlbum from "../models/SearchAlbum";

class AlbumRepositoryImpl implements IAlbumRepository{

    public async getAlbum(id: string): Promise<Album> {
        const response = await HttpClient.get(`/albums/${id}`);

        const album: Album = response.data;

        return album;
    }

    public async getAlbums(text: string, offset: number = 0): Promise<SearchAlbum> {
        const response = await HttpClient.get(`/search?query=${text}&type=album&offset=${offset}`);

        const albums: SearchAlbum = response.data;

        return albums;
    }
}

export default AlbumRepositoryImpl;