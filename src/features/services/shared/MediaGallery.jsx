import { useState, useEffect, useCallback } from "react";
import MediaPlaceholder from "./MediaPlaceholder";
import { ChevronRight, ChevronLeft, Maximize2, X } from "lucide-react";

const MediaGallery = ({ items = [], aspect = "wide" }) => {
  const [active, setActive] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!items.length) {
    return (
      <MediaPlaceholder
        type="image"
        aspect={aspect}
        caption="Gallery coming soon"
      />
    );
  }

  const current = items[active];
  const goTo = (i) => setActive((i + items.length) % items.length);

  const closeZoom = useCallback(() => setIsZoomed(false), []);

  useEffect(() => {
    if (!isZoomed) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeZoom();
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed, active, closeZoom]);

  return (
    <div className="w-full">
      <div className="relative">
        <MediaPlaceholder
          type={current.type}
          src={current.src}
          poster={current.poster}
          caption={current.caption}
          aspect={aspect}
        />

        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          aria-label="Zoom in"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow cursor-pointer"
        >
          <Maximize2 size={16} />
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow cursor-pointer"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className="text-sm text-gray-500 text-center mt-3">
          {current.caption}
        </p>
      )}

      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === active ? "bg-[#0F9E9E]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onClick={closeZoom}
        >
          <button
            type="button"
            onClick={closeZoom}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-full max-w-5xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                className="max-h-[80vh] w-auto max-w-full rounded"
              />
            ) : (
              <img
                src={current.src}
                alt={current.caption || ""}
                className="max-h-[80vh] w-auto max-w-full rounded object-contain"
              />
            )}

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(active - 1)}
                  aria-label="Previous"
                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(active + 1)}
                  aria-label="Next"
                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          {current.caption && (
            <p
              className="text-sm text-gray-300 text-center mt-4 max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {current.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
