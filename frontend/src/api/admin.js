import axios         from 'axios';
import axiosInstance from "./index";

export const getUsers = async () => {
  const data = await axiosInstance.get( '/admin/users' );
  console.table( data.data )
};