import User from '@core/data/models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
    currentUser: User | null;
    users: User[];
}

const initialState: IUserState = {
    currentUser: null,
    users: [],
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state: IUserState, actions: PayloadAction<User>){
            state.users = [
                ...state.users,
                actions.payload
            ]
        },
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;