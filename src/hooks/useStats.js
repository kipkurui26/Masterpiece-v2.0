import { useEffect, useState } from "react";

const STATS_ENDPOINT_URL = "https://masterpiecehydrosolutions.co.ke/stats.php";

// Shown immediately on mount and kept if the fetch fails
const DEFAULT_STATS = {
  surveysCompleted: 455,
  boreholesDrilledEquipped: 80,
  boreholesRehabilitated: 36,
  boreholeInspections: 40,
};

export default function useStats() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    let cancelled = false;

    fetch(STATS_ENDPOINT_URL)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.success && data?.stats) {
          setStats((prev) => ({ ...prev, ...data.stats }));
        }
      })
      .catch(() => {
        // Keep DEFAULT_STATS — no need to surface this to the visitor
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
}