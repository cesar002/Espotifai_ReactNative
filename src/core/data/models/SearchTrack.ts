import Track from "./Track";

class SearchTrack {
    public href: string;
    public limit: number;
    public next: string;
    public offset: number;
    public previous: string;
    public total: number;
    public items: Track[];


    constructor(
        href: string, 
        limit: number, 
        next: string, 
        offset: number, 
        previous: string, 
        total: number,
        items: Track[]
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

export default SearchTrack;