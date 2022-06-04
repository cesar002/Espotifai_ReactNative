import IArtistaRepository from "@core/domain/repositories/IArtistaRepository";
import Artista from "../models/Artista";
import HttpClient from "@http/httpClient";

class ArtistaRepositoryImpl implements IArtistaRepository{

    public async getArtista(id: string): Promise<Artista> {
        const response = await HttpClient.get(`/artists/${id}`);

        return response.data;
    }

}

export default ArtistaRepositoryImpl;