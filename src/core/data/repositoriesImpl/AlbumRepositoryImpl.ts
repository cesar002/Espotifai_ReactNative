import IAlbumRepository from "@core/domain/repositories/IAlbumRepository";
import Album from "../models/Album";
import HttpClient from "@http/httpClient";

class AlbumRepositoryImpl implements IAlbumRepository{

    public async getAlbum(id: string): Promise<Album> {
        const response = await HttpClient.get(`/albums/${id}`);

        return response.data;
    }

    public async getAlbums(text: string, offset: number = 0): Promise<Album[]> {
        const response = await HttpClient.get(`/search?query=${text}&type=album&offset=${offset}`);

        return response.data;
    }
}

export default AlbumRepositoryImpl;