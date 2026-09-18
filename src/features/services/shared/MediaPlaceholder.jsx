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
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" />
    <path
      d="M21 15l-5-5-9 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MediaPlaceholder = ({
  type = "image",
  src,
  responsive, // { basePath, widths, alt, sizes }
  poster,
  alt = "",
  caption,
  aspect = "video",
  height,
  objectFit = "cover",
  loading = "lazy", // "lazy" | "eager"
  fetchPriority = "auto", // "high" | "low" | "auto"
  className = "",
}) => {
  const aspectClass = AspectRatios[aspect] || AspectRatios.video;
  const objectFitClass =
    objectFit === "contain" ? "object-contain" : "object-cover";
  const sizingClass = height || aspectClass;

  if (responsive) {
    const {
      basePath,
      widths = [768, 1280, 1920],
      sizes = "100vw",
    } = responsive;
    const avifSrcSet = widths
      .map((w) => `${basePath}-${w}.avif ${w}w`)
      .join(", ");
    const webpSrcSet = widths
      .map((w) => `${basePath}-${w}.webp ${w}w`)
      .join(", ");
    const fallback = `${basePath}-1280.jpg`;

    return (
      <picture>
        <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
        <img
          src={fallback}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={loading === "eager" ? "sync" : "async"}
          className={`w-full ${sizingClass} ${objectFitClass} rounded-xl ${className}`}
        />
      </picture>
    );
  }

  if (src) {
    if (type === "video") {
      return (
        <video
          className={`w-full ${sizingClass} ${objectFitClass} rounded-xl ${className}`}
          controls
          poster={poster}
          muted
        >
          <source src={src} />
        </video>
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={loading === "eager" ? "sync" : "async"}
        className={`w-full ${sizingClass} ${objectFitClass} rounded-xl ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full ${sizingClass} rounded-xl bg-gray-200 border border-gray-300 border-dashed flex flex-col items-center justify-center gap-2 ${className}`}
    >
      {type === "video" ? <PlayIcon /> : <ImageIcon />}
      <span className="text-sm text-gray-500 px-4 text-center">
        {caption ||
          (type === "video" ? "Video coming soon" : "Image coming soon")}
      </span>
    </div>
  );
};

export default MediaPlaceholder;
