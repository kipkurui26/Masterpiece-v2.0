const getPages = (page, total) => {
  const nums = [...new Set([1, total, page - 1, page, page + 1])]
    .filter((n) => n >= 1 && n <= total)
    .sort((a, b) => a - b);

  const items = [];
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) items.push(`gap-${n}`);
    items.push(n);
  });
  return items;
};

const BTN =
  "flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors duration-200";

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className={`${BTN} border-gray-300 text-[#1B1F5C] hover:border-[#1B1F5C] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300`}
      >
        Previous
      </button>

      {getPages(page, totalPages).map((item) =>
        typeof item === "string" ? (
          <span key={item} className="px-1 text-gray-400" aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-label={`Page ${item}`}
            aria-current={item === page ? "page" : undefined}
            className={`${BTN} ${
              item === page
                ? "border-[#1B1F5C] bg-[#1B1F5C] text-white"
                : "border-gray-300 text-[#1B1F5C] hover:border-[#1B1F5C]"
            }`}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className={`${BTN} border-gray-300 text-[#1B1F5C] hover:border-[#1B1F5C] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;