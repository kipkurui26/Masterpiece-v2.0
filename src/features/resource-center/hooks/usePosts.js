import { useCallback, useEffect, useState } from "react";
import { fetchPosts } from "../api/wp";
import { POSTS_PER_PAGE } from "../../../config/wp";

const EMPTY = { posts: [], total: 0, totalPages: 0, outOfRange: false };

/**
 * Paginated post list.
 * @param {object}  options
 * @param {string}  [options.category]  category slug (omit for all)
 * @param {number}  [options.page=1]
 * @param {string}  [options.search=""] debounce this in the component
 * @param {number}  [options.perPage]
 */
export default function usePosts({
  category = "",
  page = 1,
  search = "",
  perPage = POSTS_PER_PAGE,
} = {}) {
  const safePage = Math.max(1, Number(page) || 1);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState({ key: null, data: EMPTY, error: null });

  // One key per distinct request. Loading is "the stored result is for a
  // different key", so changing filters never shows the previous list.
  const requestKey = [category, safePage, search, perPage, attempt].join("|");

  useEffect(() => {
    let ignore = false;
    fetchPosts({ category, page: safePage, search, perPage })
      .then((data) => {
        if (!ignore) setResult({ key: requestKey, data, error: null });
      })
      .catch((error) => {
        if (!ignore) setResult({ key: requestKey, data: EMPTY, error });
      });
    return () => {
      ignore = true;
    };
  }, [requestKey, category, safePage, search, perPage]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);

  const ready = result.key === requestKey;
  const data = ready ? result.data : EMPTY;

  return {
    posts: data.posts,
    total: data.total,
    totalPages: data.totalPages,
    outOfRange: data.outOfRange, // page number is past the last page
    loading: !ready,
    error: ready ? result.error : null,
    page: safePage,
    retry,
  };
}