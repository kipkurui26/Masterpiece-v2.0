const PILL = "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200";
const ACTIVE = "border-[#1B1F5C] bg-[#1B1F5C] text-white";
const IDLE = "border-[#5DD9D9] text-[#1B1F5C] hover:bg-[#5DD9D9]/20";

const CategoryFilter = ({ categories, activeSlug, onChange, loading }) => {
  if (loading) {
    return (
      <div className="flex gap-2" aria-hidden="true">
        {[64, 120, 110, 130, 100].map((w, i) => (
          <div
            key={i}
            style={{ width: w }}
            className="h-9 shrink-0 animate-pulse rounded-full bg-gray-200"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Filter guides by category"
      className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
    >
      <button
        type="button"
        aria-pressed={!activeSlug}
        onClick={() => onChange("")}
        className={`${PILL} ${!activeSlug ? ACTIVE : IDLE}`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          aria-pressed={activeSlug === c.slug}
          onClick={() => onChange(c.slug)}
          className={`${PILL} ${activeSlug === c.slug ? ACTIVE : IDLE}`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;