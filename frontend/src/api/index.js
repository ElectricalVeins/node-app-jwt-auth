import axios                                   from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants";

const axiosInstance = axios.create( {
	baseURL: 'http://localhost:3030/api',
	headers: {
		'Content-type': 'application/json'
	},
} );

export default axiosInstance;



//INTERCEPTORS


axiosInstance.interceptors.request.use( ( config ) => {
	config.headers.authorization = sessionStorage.getItem( ACCESS_TOKEN_KEY );
	return config;
} );

axiosInstance.interceptors.response.use( response => response, async error => {
	const { response: { status }, config } = error;

	switch ( status ) {
		case 419: {
			const { data: { accessToken, refreshToken } } = await axiosInstance.post( '/refresh_tokens', { refreshToken: localStorage.getItem( REFRESH_TOKEN_KEY ) } )

			sessionStorage.setItem( ACCESS_TOKEN_KEY, accessToken );
			localStorage.setItem( REFRESH_TOKEN_KEY, refreshToken );

			return axiosInstance.request( config );
		}
		default:
			return error;
	}
} );
