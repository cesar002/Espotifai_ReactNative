import Artista from "@core/data/models/Artista";

interface IArtistaRepository {
    getArtista(id: string): Promise<Artista>;
    getArtistas(text: string, offset:number): Promise<Artista[]>
}

export default IArtistaRepository;