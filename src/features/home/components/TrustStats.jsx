// TrustStats.jsx
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 455, suffix: "+", label: "Hydrogeological Surveys Completed" },
  { value: 80, suffix: "+", label: "Boreholes Drilled & Equipped" },
  { value: 36, suffix: "+", label: "Boreholes Rehabilitated" },
  { value: 40, suffix: "+", label: "Borehole Inspections Conducted" },
];

// Lightweight count-up on scroll into view — no extra dependency required
const useCountUp = (target, shouldStart, duration = 1400) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let start;
    let frameId;

    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldStart, target, duration]);

  return count;
};

const StatItem = ({ value, suffix, label, shouldStart }) => {
  const count = useCountUp(value, shouldStart);

  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-[#1B1F5C] sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-gray-600 sm:text-base">{label}</p>
    </div>
  );
};

const TrustStats = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-lg font-semibold uppercase tracking-wide text-[#0F9E9E]">
          Trusted by Property Owners, Farmers, Businesses, and Institutions Across Kenya
        </p>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} shouldStart={inView} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Backed by years of field experience and hundreds of completed groundwater projects
          across Kenya.
        </p>
      </div>
    </section>
  );
};

export default TrustStats;