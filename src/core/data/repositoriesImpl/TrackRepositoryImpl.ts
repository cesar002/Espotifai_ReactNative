import ITrackRepository from "@core/domain/repositories/ITrackRepository";
import Track from "../models/Track";
import HttpClient from "@http/httpClient";
import SearchTrack from "../models/SearchTrack";

class TrackRepositoryImpl implements ITrackRepository{

    public async getTrack(id: string): Promise<Track> {
        const response = await HttpClient.get(`/tracks/${id}`);

        return response.data;
    }

    public async getTracks(text: string, offset: number = 0): Promise<SearchTrack> {
        const response = await HttpClient.get(`/search?query=${text}&type=track&offset=${offset}`);

        const tracks: SearchTrack = response.data;

        return tracks;
    }
}

export default TrackRepositoryImpl;