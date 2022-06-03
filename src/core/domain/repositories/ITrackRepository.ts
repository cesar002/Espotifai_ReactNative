import Track from "@core/data/models/Track";

interface ITrackRepository {
    getTrack(id: string): Promise<Track>;
    getTracks(text: string, offset:number): Promise<Track[]>
}

export default ITrackRepository;