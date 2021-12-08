import { useEffect } from "react/cjs/react.development";
import { useState } from "react";

function useFetchData({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const resp = await fetch(url);
        const todoData = await resp.json();
        setData(todoData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    data,
    setData,
    loading,
    setLoading,
  };
}

export default useFetchData;
