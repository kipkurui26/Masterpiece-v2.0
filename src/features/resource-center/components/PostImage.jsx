import { useState } from "react";

const DropIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3s-6.5 7-6.5 11.2a6.5 6.5 0 0 0 13 0C18.5 10 12 3 12 3z" />
  </svg>
);

const PostImage = ({ post, sizes, eager = false, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (!post.image || failed) {
    return (
      <div
        aria-hidden="true"
        className={`flex items-center justify-center bg-linear-to-br from-[#1B1F5C] to-[#0F9E9E] ${className}`}
      >
        <DropIcon className="h-10 w-10 text-white/60" />
      </div>
    );
  }

  return (
    <img
      src={post.image}
      srcSet={post.imageSrcSet || undefined}
      sizes={post.imageSrcSet ? sizes : undefined}
      alt={post.imageAlt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding={eager ? "sync" : "async"}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};

export default PostImage;