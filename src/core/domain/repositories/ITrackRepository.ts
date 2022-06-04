import Track from "@core/data/models/Track";

interface ITrackRepository {
    getTrack(id: string): Promise<Track>;
}

export default ITrackRepository;