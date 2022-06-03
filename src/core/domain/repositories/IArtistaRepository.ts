import Artista from "@core/data/models/Artista";
import SearchArtista from "@core/data/models/SearchArtista";

interface IArtistaRepository {
    getArtista(id: string): Promise<Artista>;
    getArtistas(text: string, offset:number): Promise<SearchArtista>
}

export default IArtistaRepository;