import { useEffect, useState } from "react";

const useMediaquery = (query: string): boolean => {
  const [match, setMatch] = useState<boolean>(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatch(e.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return match;
};

export default useMediaquery;
