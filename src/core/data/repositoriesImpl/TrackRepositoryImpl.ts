import ITrackRepository from "@core/domain/repositories/ITrackRepository";
import Track from "../models/Track";
import HttpClient from "@http/httpClient";

class TrackRepositoryImpl implements ITrackRepository{

    public async getTrack(id: string): Promise<Track> {
        const response = await HttpClient.get(`/tracks/${id}`);

        const track: Track = response.data;

        return track;
    }

    public async getTopTracksArtista(id: string): Promise<Track[]> {
        try {
            const response = await HttpClient.get(`/artists/${id}/top-tracks?market=ES`);

            const tracks: Track[] = response.data.tracks;

            return tracks;
        } catch (error) {
            return [];
        }
    }

}

export default TrackRepositoryImpl;