/**
 * Steam review summary, fetched once at build time so the number shown is
 * as fresh as the last deploy. Returns null when Steam is unreachable and
 * the page simply omits the line.
 */
export type SteamReviews = { total: number; positive: number; percent: number };

const cache = new Map<number, Promise<SteamReviews | null>>();

export function getSteamReviews(appId: number): Promise<SteamReviews | null> {
  if (!cache.has(appId)) cache.set(appId, load(appId));
  return cache.get(appId)!;
}

async function load(appId: number): Promise<SteamReviews | null> {
  try {
    const res = await fetch(
      `https://store.steampowered.com/appreviews/${appId}?json=1&language=all&purchase_type=all&num_per_page=0`,
      { signal: AbortSignal.timeout(8000) },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      query_summary?: { total_reviews?: number; total_positive?: number };
    };
    const total = data.query_summary?.total_reviews ?? 0;
    const positive = data.query_summary?.total_positive ?? 0;
    if (total < 10) return null;
    return { total, positive, percent: Math.round((positive / total) * 100) };
  } catch {
    return null;
  }
}
