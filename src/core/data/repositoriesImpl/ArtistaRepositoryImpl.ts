import IArtistaRepository from "@core/domain/repositories/IArtistaRepository";
import Artista from "../models/Artista";
import HttpClient from "@http/httpClient";
import SearchArtista from "../models/SearchArtista";

class ArtistaRepositoryImpl implements IArtistaRepository{

    public async getArtista(id: string): Promise<Artista> {
        const response = await HttpClient.get(`/artists/${id}`);

        return response.data;
    }

    public async getArtistas(text: string, offset: number = 0): Promise<SearchArtista> {
        const response = await HttpClient.get(`/search?q=${text}&type=artist&offset=${offset}`);

        const artistas: SearchArtista = response.data;

        return artistas;
    }

}

export default ArtistaRepositoryImpl;