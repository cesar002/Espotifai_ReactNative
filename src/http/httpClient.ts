import Axios, { AxiosRequestConfig } from 'axios';
import store from '@redux/store';

const HttpClient = Axios.create({
    baseURL: 'https://api.spotify.com/v1',//'https://accounts.spotify.com/api',
	timeout: 20000,
	headers: {
		'Accept' : 'application/json',
		"Access-Control-Allow-Origin": "*",
	},
});

//Interceptor para agregar el token de autorización
HttpClient.interceptors.request.use((config: AxiosRequestConfig)=>{
	const state = store.getState();
	const token = state.login.login_data.access_token;
	
	config.headers = {
		'Authorization': `Bearer ${token}`,
		'Accept': 'application/json',
	}
}, error =>{
	Promise.reject(error);
})

export default HttpClient;