import {useState, useEffect} from 'react'

export const useFetch = (url: string, options: any, deps :string[] = []) => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error: any) {
          setError(error);
        }
      };
      url && deps.every((eachValue)=>eachValue!=='') && fetchData();
    }, deps);
    return { response, error };
};