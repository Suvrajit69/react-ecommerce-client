import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const isComaPresent = url.indexOf(",");
  if (isComaPresent >= 1) {
    let murl = url.split(",")[0];
    for(let i = 1; i<url.split(",").length; i++){
       murl+= url.split(",")[i];
    }
    url = murl;
  }
  console.log(url)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await makeRequest.get(url);
        setData(response.data.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
