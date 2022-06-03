
/**
 * Representa una entidad de tipo Artist dentro de la API de Spotify
 */
class Artista {
    public external_urls: any;
    public followers: any;
    public genres: string[];
    public href: string;
    public id: string;
    public images: any[];
    public name: string;
    public popularity: string;
    public type: string;
    public uri: string;


    constructor(
        external_urls: any, 
        followers: any, 
        genres: string[], 
        href: string, 
        id: string, 
        images: any[], 
        name: string, 
        popularity: string, 
        type: string, 
        uri: string
    ) {
        this.external_urls = external_urls
        this.followers = followers
        this.genres = genres
        this.href = href
        this.id = id
        this.images = images
        this.name = name
        this.popularity = popularity
        this.type = type
        this.uri = uri
    }


}

export default Artista;