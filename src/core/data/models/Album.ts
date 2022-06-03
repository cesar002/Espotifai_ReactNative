import Artista from "./Artista";
import Track from "./Track";

/**
 * Representa una entidad de tipo Album dentro del API de Spotify
 */
class Album{
    public id: string;
    public album_type: string;
    public total_tracks: number;
    public external_urls: any;
    public href: string;
    public images: any;
    public name: string;
    public release_date: any;
    public release_date_precision: string;
    public type: string;
    public uri: string;
    public artists: Artista[];
    public tracks: Track[];

    constructor(
        id: string, 
        album_type: string, 
        total_tracks: number, 
        external_urls: any, 
        href: string, 
        images: any, 
        name: string, 
        release_date: any, 
        release_date_precision: string, 
        type: string, 
        uri: string, 
        artists: Artista[], 
        tracks: Track[]
    ) {
        this.id = id
        this.album_type = album_type
        this.total_tracks = total_tracks
        this.external_urls = external_urls
        this.href = href
        this.images = images
        this.name = name
        this.release_date = release_date
        this.release_date_precision = release_date_precision
        this.type = type
        this.uri = uri
        this.artists = artists
        this.tracks = tracks
    }

}

export default Album;