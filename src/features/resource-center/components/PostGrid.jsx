import PostCard from "./PostCard";

const SKELETON_COUNT = 6;
const GRID = "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

const PostGrid = ({ posts, loading, error, onRetry, hasFilters, onClear }) => {
  if (loading) {
    return (
      <div className={GRID} aria-busy="true" aria-label="Loading guides">
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="aspect-3/2 animate-pulse bg-gray-200" />
            <div className="space-y-3 p-5">
              <div className="h-3 w-1/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="text-base font-semibold text-[#1B1F5C]">
          We couldn't load the guides right now.
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Please check your connection and try again.
        </p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 rounded-md bg-[#1B1F5C] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#141748]"
        >
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <p className="text-base font-semibold text-[#1B1F5C]">No guides found</p>
        <p className="mt-2 text-sm text-gray-600">
          {hasFilters
            ? "There are no guides in this category yet."
            : "New guides are on the way. Please check back soon."}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={onClear}
            className="mt-5 text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 hover:text-[#1B1F5C]"
          >
            View all guides →
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={GRID}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;