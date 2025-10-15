import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(url)
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
};
