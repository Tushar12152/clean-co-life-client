import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5002/api/v1',
    withCredentials:true,
  
  });


const useAxios = () => {
    return instance;
};

export default useAxios;