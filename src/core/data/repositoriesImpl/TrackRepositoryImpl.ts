import ITrackRepository from "@core/domain/repositories/ITrackRepository";
import Track from "../models/Track";
import HttpClient from "@http/httpClient";

class TrackRepositoryImpl implements ITrackRepository{

    public async getTrack(id: string): Promise<Track> {
        const response = await HttpClient.get(`/tracks/${id}`);

        return response.data;
    }
}

export default TrackRepositoryImpl;