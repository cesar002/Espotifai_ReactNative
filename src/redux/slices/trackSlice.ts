import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Track from '@core/data/models/Track';

interface IFetchStatus{
    start?: boolean;
    finish?: boolean;
    success?: boolean;
    fail?: boolean;
}

export interface ITrackState {
    track: Track | null;
    status?: IFetchStatus;
}

const initialState: ITrackState = {
    track: null,
    status: {
        start: false,
        finish: false,
        success: false,
        fail: false,
    }
}

const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        fetchTrack(state: ITrackState, action: PayloadAction<string>){
            state.status = {
                ...initialState.status,
                start: true,
            }
        },
        setTrack(state: ITrackState, action: PayloadAction<ITrackState>){
            state.track = action.payload.track;
        },
        setStatus(state: ITrackState, action: PayloadAction<IFetchStatus>){
            state.status = {
                ...action.payload
            }
        },
    }
});

export const {  fetchTrack, setTrack, setStatus } = trackSlice.actions;
export default trackSlice.reducer;