import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface INetStatusState {
    connected: boolean
}

const initialState: INetStatusState = {
    connected: true,
}

const netStatusSlice = createSlice({
    name: 'netStatus',
    initialState,
    reducers: {
        setConnected(state: INetStatusState){
            state.connected = true;
        },
        setDisconnected(state: INetStatusState){
            state.connected = false;
        },
    }
});

export const { setConnected, setDisconnected } = netStatusSlice.actions;
export default netStatusSlice.reducer;