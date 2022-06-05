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
        setCurrentUser(state: IUserState, action: PayloadAction<User | null>){
            console.log(action.payload)
            state.currentUser = action.payload;
        },
        addUser(state: IUserState, action: PayloadAction<User | null>){
            if(action.payload){
                state.users = [
                    ...state.users,
                    action.payload
                ]
            }
        },
        clearCurrentUser(state: IUserState){
            state.currentUser = null;
        },
    }
})

export const { addUser, setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;