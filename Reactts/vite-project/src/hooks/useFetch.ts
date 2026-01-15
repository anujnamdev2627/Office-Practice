import { useState } from "react";

interface FetchSate<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchSate<T> {
  const [state, setState] = useState<FetchSate<T>>({
    data: null,
    loading: true,
    error: null,
  });

  //useEffect to automate

  return state;
}
