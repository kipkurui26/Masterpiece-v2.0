import { useCallback, useEffect, useState } from "react";
import { fetchCategories } from "../api/wp";

export default function useCategories() {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState({ attempt: null, categories: [], error: null });

  useEffect(() => {
    let ignore = false;
    fetchCategories()
      .then((categories) => {
        if (!ignore) setResult({ attempt, categories, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult({ attempt, categories: [], error });
      });
    return () => {
      ignore = true;
    };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return {
    categories: result.categories,
    loading: result.attempt !== attempt,
    error: result.attempt === attempt ? result.error : null,
    retry,
  };
}