import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { SEO } from "../../components/SEO";
import { PAGE_SEO } from "../../config/seo";

import useCategories from "./hooks/useCategories";
import useFeaturedPosts from "./hooks/useFeaturedPosts";
import usePosts from "./hooks/usePosts";

import FeaturedBanner from "./components/FeaturedBanner";
import CategoryFilter from "./components/CategoryFilter";
import PostGrid from "./components/PostGrid";
import Pagination from "./components/Pagination";
import ResourceCTA from "./components/ResourceCTA";

const ResourceCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const listRef = useRef(null);

  const category = searchParams.get("category") || "";
  const page = Math.max(1, parseInt(searchParams.get("page"), 10) || 1);

  const { categories, loading: categoriesLoading } = useCategories();
  const featured = useFeaturedPosts();
  const { posts, totalPages, loading, error, outOfRange, retry } = usePosts({
    category,
    page,
  });

  const updateParams = (changes, options) =>
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(changes).forEach(([key, value]) => {
        if (value) next.set(key, String(value));
        else next.delete(key);
      });
      return next;
    }, options);

  const changeCategory = (slug) => updateParams({ category: slug, page: "" });

  const changePage = (n) => {
    updateParams({ page: n > 1 ? n : "" });
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // A stale ?page=9 (e.g. after posts were removed) falls back to page 1
  useEffect(() => {
    if (outOfRange && page > 1) {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          next.delete("page");
          return next;
        },
        { replace: true },
      );
    }
  }, [outOfRange, page, setSearchParams]);

  const activeName = categories.find((c) => c.slug === category)?.name;

  return (
    <div>
      <SEO {...PAGE_SEO.resourceCentre} />

      {/* Intro (static, so it is in the prerendered HTML) */}
      <section className="bg-[#5DD9D9]/20 py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#0F9E9E]">
            Learn Before You Invest
          </p>
          <h1 className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
            Knowledge Centre
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Practical guideance for farmers and land owners planning, drilling or maintaining a borehole
          </p>
        </div>
      </section>

      <FeaturedBanner posts={featured.posts} loading={featured.loading} />

      {/* Listing */}
      <section ref={listRef} className="scroll-mt-24 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-2xl font-bold text-[#1B1F5C]">
            {activeName || "All Guides"}
          </h2>

          <div className="mb-8">
            <CategoryFilter
              categories={categories}
              activeSlug={category}
              onChange={changeCategory}
              loading={categoriesLoading}
            />
          </div>

          <PostGrid
            posts={posts}
            loading={loading}
            error={error}
            onRetry={retry}
            hasFilters={Boolean(category)}
            onClear={() => changeCategory("")}
          />

          {!loading && !error && (
            <Pagination page={page} totalPages={totalPages} onChange={changePage} />
          )}
        </div>
      </section>

      <ResourceCTA />
    </div>
  );
};

export default ResourceCenter;