import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import PostImage from "./PostImage";
import BannerSideCard from "./BannerSideCard";

const SLIDE_MS = 6000;
const SWIPE_PX = 50;

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const useTabHidden = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onChange = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return hidden;
};

const CONTROL_BTN =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1B1F5C] shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white";

const BannerSkeleton = () => (
  <div className="grid gap-4 lg:grid-cols-3" aria-hidden="true">
    <div className="aspect-4/3 animate-pulse rounded-2xl bg-gray-200 sm:aspect-video lg:col-span-2" />
    <div className="hidden flex-col gap-4 lg:flex">
      <div className="flex-1 animate-pulse rounded-xl bg-gray-200" />
      <div className="flex-1 animate-pulse rounded-xl bg-gray-200" />
    </div>
    <div className="h-24 animate-pulse rounded-xl bg-gray-200 lg:hidden" />
  </div>
);

const FeaturedBanner = ({ posts, loading }) => {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const touchX = useRef(null);

  const reducedMotion = useReducedMotion();
  const tabHidden = useTabHidden();

  const count = posts.length;
  const active = count ? index % count : 0;
  const autoplay = count > 1 && !reducedMotion && !userPaused;
  const paused = hovered || focused || touching || tabHidden;

  const go = (i) => setIndex(((i % count) + count) % count);
  const next = () => go(active + 1);
  const prev = () => go(active - 1);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    setTouching(true);
  };
  const onTouchEnd = (e) => {
    setTouching(false);
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) > SWIPE_PX) go(active + (delta < 0 ? 1 : -1));
  };
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // Banner is a bonus: on error or with no posts it simply doesn't render
  if (!loading && count === 0) return null;

  const sidePosts = Array.from(
    { length: Math.min(2, Math.max(count - 1, 0)) },
    (_, k) => posts[(active + 1 + k) % count],
  );

  return (
    <section aria-labelledby="featured-heading" className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="featured-heading" className="sr-only">
          Featured guides
        </h2>

        {loading ? (
          <BannerSkeleton />
        ) : (
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Main slider */}
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Featured guides"
              className={`relative touch-pan-y overflow-hidden rounded-2xl bg-[#1B1F5C] ${
                count > 1 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
              onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
              onPointerLeave={() => setHovered(false)}
              onFocus={(e) => e.target.matches(":focus-visible") && setFocused(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
              }}
              onKeyDown={onKeyDown}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="relative aspect-4/3 sm:aspect-video"
                aria-live={autoplay ? "off" : "polite"}
              >
                {posts.map((post, i) => {
                  const isActive = i === active;
                  const tab = isActive ? 0 : -1;
                  return (
                    <div
                      key={post.id}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} of ${count}`}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive ? "opacity-100" : "pointer-events-none opacity-0"
                      }`}
                    >
                      <PostImage
                        post={post}
                        eager={i === 0}
                        sizes="(min-width: 1024px) 66vw, 100vw"
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-5 pb-8 sm:p-8 sm:pb-10">
                        {post.category && (
                          <span className="inline-block rounded bg-[#5DD9D9] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#1B1F5C]">
                            {post.category}
                          </span>
                        )}
                        <h3 className="mt-3 max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                          <a href={post.url} tabIndex={tab} className="hover:underline">
                            {post.title}
                          </a>
                        </h3>
                        {post.excerpt && (
                          <p className="mt-2 hidden max-w-2xl text-sm text-gray-200 sm:line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <a
                          href={post.url}
                          tabIndex={tab}
                          aria-label={`Read more: ${post.title}`}
                          className="mt-4 inline-block rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#1B1F5C] transition-colors duration-200 hover:bg-[#5DD9D9]"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controls */}
              {count > 1 && (
                <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                  {!reducedMotion && (
                    <button
                      type="button"
                      onClick={() => setUserPaused((p) => !p)}
                      aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
                      className={CONTROL_BTN}
                    >
                      {userPaused ? <Play size={18} /> : <Pause size={18} />}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous featured guide"
                    className={CONTROL_BTN}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next featured guide"
                    className={CONTROL_BTN}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              {/* Countdown bar: restarts on every slide change (key) and advances on end */}
              {autoplay && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" aria-hidden="true">
                  <span
                    key={active}
                    onAnimationEnd={(e) => {
                      if (e.animationName === "banner-progress") next();
                    }}
                    className="block h-full origin-left bg-[#5DD9D9]"
                    style={{
                      transform: "scaleX(0)",
                      animationName: "banner-progress",
                      animationDuration: `${SLIDE_MS}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Desktop: next two posts */}
            {sidePosts.length > 0 && (
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                {sidePosts.map((post) => (
                  <BannerSideCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {/* Mobile: one compact "Up next" row */}
            {count > 1 && (
              <div className="lg:hidden">
                <BannerSideCard post={posts[(active + 1) % count]} compact />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedBanner;