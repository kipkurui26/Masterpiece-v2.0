import { useCallback, useEffect, useState } from "react";
import { fetchFeaturedPosts } from "../api/wp";

export default function useFeaturedPosts() {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState({ attempt: null, posts: [], error: null });

  useEffect(() => {
    let ignore = false;
    fetchFeaturedPosts()
      .then((posts) => {
        if (!ignore) setResult({ attempt, posts, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult({ attempt, posts: [], error });
      });
    return () => {
      ignore = true;
    };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  return {
    posts: result.posts,
    loading: result.attempt !== attempt,
    error: result.attempt === attempt ? result.error : null,
    retry,
  };
}