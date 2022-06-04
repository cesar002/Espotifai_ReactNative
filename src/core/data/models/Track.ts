import Album from "./Album";
import Artista from "./Artista";


interface Track {
    album: Album;
    artists: Artista[];
    disc_number: number;
    duracion_ms: number;
    explicit: boolean;
    external_urls: any;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export default Track;