import Artista from "./Artista";
import { ISearchTrack } from "./SearchResult";
import Track from "./Track";

interface Album {
    id: string;
    album_type: string;
    total_tracks: number;
    external_urls: any;
    href: string;
    images: any[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
    artists: Artista[];
    tracks: ISearchTrack;
}


export default Album;