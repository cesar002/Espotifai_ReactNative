import IAlbumRepository from "@core/domain/repositories/IAlbumRepository";
import Album from "../models/Album";
import HttpClient from "@http/httpClient";
import { ISearchAlbum } from "../models/SearchResult";

class AlbumRepositoryImpl implements IAlbumRepository{

    public async getAlbum(id: string): Promise<Album> {
        const response = await HttpClient.get(`/albums/${id}`);
        
        const album: Album = response.data;

        return album;
    }

    public async getAlbumsByArtistaId(id: string): Promise<ISearchAlbum> {
        const response = await HttpClient.get(`/artists/${id}/albums`);

        const albums: ISearchAlbum = response.data;

        return albums;
    }

}

export default AlbumRepositoryImpl;