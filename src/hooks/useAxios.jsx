import axios from "axios";
import { useEffect, useState } from "react";



const isProduction = import.meta.env.PROD;

// set global base url for every req
axios.defaults.baseURL = isProduction
  ? import.meta.env.VITE_PRODUCTION_URL
  : import.meta.env.VITE_DEVELOPMENT_URL



const useAxios = (axiosParams) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {

        try {

            const result = await axios.request(params);
            setResponse(result.data);

        } catch (error) {

            setError(error);

        } finally {
            
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchData(axiosParams);
        
    }, []);

  return { response, error, loading };
};


export default useAxios;