import IAlbumRepository from "@core/domain/repositories/IAlbumRepository";
import Album from "../models/Album";
import HttpClient from "@http/httpClient";

class AlbumRepositoryImpl implements IAlbumRepository{

    public async getAlbum(id: string): Promise<Album> {
        const response = await HttpClient.get(`/albums/${id}`);

        const album: Album = response.data;

        return album;
    }
}

export default AlbumRepositoryImpl;