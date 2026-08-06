import { useState } from "react";
import MediaPlaceholder from "./MediaPlaceholder";

const MediaGallery = ({ items = [], aspect = "wide" }) => {
  const [active, setActive] = useState(0);

  if (!items.length) {
    return <MediaPlaceholder type="image" aspect={aspect} caption="Gallery coming soon" />;
  }

  const current = items[active];
  const goTo = (i) => setActive((i + items.length) % items.length);

  return (
    <div className="w-full">
      <div className="relative">
        <MediaPlaceholder type={current.type} src={current.src} poster={current.poster} caption={current.caption} aspect={aspect} />
        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label="Previous"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label="Next"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
            >
              ›
            </button>
          </>
        )}
      </div>
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
      {current.caption && <p className="text-sm text-gray-500 text-center mt-3">{current.caption}</p>}
    </div>
  );
};

export default MediaGallery;