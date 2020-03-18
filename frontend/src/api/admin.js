import axios         from 'axios';
import axiosInstance from "./index";

export const getUsers = () => {
	axiosInstance.get( '/admin/users' );
}