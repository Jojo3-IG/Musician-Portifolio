import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function useFetch(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}${path}`);
        if (!res.ok) throw new Error(`Server answered ${res.status}`);
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [path]);

  return { data, loading, error };
}