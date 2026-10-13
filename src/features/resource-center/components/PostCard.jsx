import PostImage from "./PostImage";

const PostCard = ({ post }) => (
  <article className="h-full">
    <a
      href={post.url}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F9E9E]"
    >
      <div className="relative aspect-3/2 w-full overflow-hidden bg-gray-200">
        <PostImage
          post={post}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0F9E9E]">
          {post.category && <span>{post.category}</span>}
          {post.category && <span className="mx-2 text-gray-300">•</span>}
          <time dateTime={post.date} className="font-medium normal-case text-gray-500">
            {post.dateLabel}
          </time>
        </p>

        <h3 className="mt-2 text-base font-semibold leading-snug text-[#1B1F5C]">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {post.excerpt}
          </p>
        )}

        <span className="mt-auto pt-4 text-sm font-semibold text-[#0F9E9E] transition-colors duration-200 group-hover:text-[#1B1F5C]">
          Read more →
        </span>
      </div>
    </a>
  </article>
);

export default PostCard;