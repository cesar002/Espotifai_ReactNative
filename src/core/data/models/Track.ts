import Album from "./Album";
import Artista from "./Artista";


/**
 * Representa una entidad de tipo Track dentro del Api de Spotify
 */
class Track{
    public album: Album;
    public artists: Artista[];
    public disc_number: number;
    public duracion_ms: number;
    public explicit: boolean;
    public external_urls: any;
    public href: string;
    public id: string;
    public name: string;
    public popularity: number;
    public preview_url: string;
    public track_number: number;
    public type: string;
    public uri: string;

    constructor(
        album: Album, 
        artists: any[], 
        disc_number: number, 
        duracion_ms: number, 
        explicit: boolean, 
        external_urls: any, 
        href: string, 
        id: string, 
        name: string, 
        popularity: number, 
        preview_url: string, 
        track_number: number, 
        type: string, 
        uri: string
    ) {
        this.album = album
        this.artists = artists
        this.disc_number = disc_number
        this.duracion_ms = duracion_ms
        this.explicit = explicit
        this.external_urls = external_urls
        this.href = href
        this.id = id
        this.name = name
        this.popularity = popularity
        this.preview_url = preview_url
        this.track_number = track_number
        this.type = type
        this.uri = uri
    }
    
}

export default Track;