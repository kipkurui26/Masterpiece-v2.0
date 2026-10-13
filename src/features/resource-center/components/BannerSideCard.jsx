import PostImage from "./PostImage";

const BannerSideCard = ({ post, compact = false }) => {
  if (compact) {
    return (
      <a
        href={post.url}
        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-md"
      >
        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200">
          <PostImage post={post} sizes="80px" className="absolute inset-0 h-full w-full" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0F9E9E]">
            Up next
          </p>
          <p className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug text-[#1B1F5C]">
            {post.title}
          </p>
        </div>
      </a>
    );
  }

  return (
    <article className="flex min-h-0 flex-1">
      <a
        href={post.url}
        className="group flex w-full overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9E9E]"
      >
        <div className="relative w-2/5 shrink-0 overflow-hidden bg-gray-200">
          <PostImage
            post={post}
            sizes="(min-width: 1024px) 14vw, 40vw"
            className="absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center p-4">
          {post.category && (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0F9E9E]">
              {post.category}
            </p>
          )}
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[#1B1F5C]">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-600">
              {post.excerpt}
            </p>
          )}
          <span className="mt-2 text-xs font-semibold text-[#0F9E9E] transition-colors duration-200 group-hover:text-[#1B1F5C]">
            Read more →
          </span>
        </div>
      </a>
    </article>
  );
};

export default BannerSideCard;