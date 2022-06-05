import Favorito from '@core/data/models/Favorito';
import User from '@core/data/models/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IAddFavAction {
    userId: string;
    favorito: Favorito;
}

export interface IRemoveFavAction {
    email: string;
    favId: string;
}
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
        addFavorito(state, action: PayloadAction<IAddFavAction>){
            state.currentUser.favoritos = [
                ...state.currentUser.favoritos,
                action.payload.favorito
            ];

            state.users = state.users.map((user: User)=>{
                if(user.email == action.payload.userId){
                    const favs = user.favoritos ?? [];
                    return {
                        ...user,
                        favoritos: [
                            ...favs,
                            action.payload.favorito
                        ]
                    }
                }

                return user;
            })
        },
        removeFavorito(state, action: PayloadAction<IRemoveFavAction>){
            state.currentUser.favoritos = state.currentUser?.favoritos?.filter((fav: Favorito)=>
                fav.id !== action.payload.favId
            );

            state.users = state.users.map((user: User)=>{
                if(user.email == action.payload.email){
                    const favs = user.favoritos ?? [];

                    user.favoritos = favs.filter((f: Favorito)=>  f.id !== action.payload.favId)

                    return user;
                }

                return user;
            })
        }
    }
})

export const { addUser, setCurrentUser, clearCurrentUser, addFavorito, removeFavorito } = userSlice.actions;
export default userSlice.reducer;