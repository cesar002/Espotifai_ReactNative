
import Artista from "./Artista";
import Track from "./Track";
import Album from "./Album";

export interface ISearchAlbum {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Album[];
}

export interface ISearchTrack {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Track[];
}

export interface ISearchArtista {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Artista[];
}

interface SearchResult {
    albums: ISearchAlbum | null,
    artists: ISearchArtista | null,
    tracks: ISearchTrack | null,
}

export default SearchResult