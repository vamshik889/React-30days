import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const res = async function () {
      setLoading(true);
      try {
        const respo = await axios.get(url);
        setData(respo.data);
      } catch (error) {
        console.log(error);
        setError(error || "something went wrong");
      } finally {
        setLoading(false);
      }
    };
    res();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;

//usage inside the components
const { data, loading, error } = useFetch(url);
