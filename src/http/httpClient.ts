import Axios from 'axios';

const HttpClient = Axios.create({
    baseURL: 'https://accounts.spotify.com/api',
	timeout: 20000,
	headers: {
		'Accept' : 'application/json',
		"Access-Control-Allow-Origin": "*",
	},
});

export default HttpClient;