import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILoginData {
    access_token: string | null;
    token_type: string | null;
    expires_in: number | null;
}

export interface ILoginStatus {
    start?: boolean;
    finish?: boolean;
    success?: boolean;
    fail?: boolean;
}

export interface ILoginState {
    login_data: ILoginData;
    status: ILoginStatus;
}


const initialState: ILoginState = {
    login_data: {
        access_token: null,
        token_type: null,
        expires_in: null,
    },
    status: {
        start: false,
        finish: false,
        success: false,
        fail: false,
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        startLogin(state: ILoginState){
            state.status = {
                ...state.status,
                start: true
            }
        },
        finishLogin(state: ILoginState){
            state.status = {
                ...state.status,
                start: false,
                finish: true,
            }
        },
        setLoginData(state: ILoginState, action: PayloadAction<ILoginData>){
            state.login_data = action.payload;
        },
        setStatusLogin(state: ILoginState, action: PayloadAction<ILoginStatus>){
            state.status = {
                ...state.status,
                success: action.payload.success,
                fail: action.payload.fail,
            }
        }
    }
});

export const { startLogin, finishLogin, setLoginData, setStatusLogin } = loginSlice.actions;
export default loginSlice.reducer;