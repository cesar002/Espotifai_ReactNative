import Album from "./Album";

class SearchAlbum {
    public href: string;
    public limit: number;
    public next: string;
    public offset: number;
    public previous: string;
    public total: number;
    public items: Album[];


    constructor(
        href: string, 
        limit: number, 
        next: string, 
        offset: number, 
        previous: string, 
        total: number,
        items: Album[]
    ) {
        this.href = href
        this.limit = limit
        this.next = next
        this.offset = offset
        this.previous = previous
        this.total = total
        this.items = items;
    }

}

export default SearchAlbum;