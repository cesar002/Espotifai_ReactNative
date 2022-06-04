import Artista from "@core/data/models/Artista";

interface IArtistaRepository {
    getArtista(id: string): Promise<Artista>;
}

export default IArtistaRepository;