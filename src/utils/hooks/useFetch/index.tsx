import { useEffect, useState } from "react";

interface Host {
  name: string;
  picture: string;
}

export interface Property {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
}

const useFetch = (url: string) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoadig] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    setIsLoadig(true);
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProperties(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoadig(false);
      }
    }
    fetchData();
  }, [url]);
  return { properties, isLoading, error };
};

export default useFetch;
