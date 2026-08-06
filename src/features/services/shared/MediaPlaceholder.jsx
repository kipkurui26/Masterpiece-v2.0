const AspectRatios = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-gray-400">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
  </svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-gray-400">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
    <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MediaPlaceholder = ({ type = "image", src, poster, alt = "", caption, aspect = "video", className = "" }) => {
  const aspectClass = AspectRatios[aspect] || AspectRatios.video;

  if (src) {
    if (type === "video") {
      return (
        <video className={`w-full ${aspectClass} object-cover rounded-xl ${className}`} controls poster={poster} muted>
          <source src={src} />
        </video>
      );
    }
    return <img src={src} alt={alt} className={`w-full ${aspectClass} object-cover rounded-xl ${className}`} />;
  }

  return (
    <div className={`w-full ${aspectClass} rounded-xl bg-gray-200 border border-gray-300 border-dashed flex flex-col items-center justify-center gap-2 ${className}`}>
      {type === "video" ? <PlayIcon /> : <ImageIcon />}
      <span className="text-sm text-gray-500 px-4 text-center">
        {caption || (type === "video" ? "Video coming soon" : "Image coming soon")}
      </span>
    </div>
  );
};

export default MediaPlaceholder;