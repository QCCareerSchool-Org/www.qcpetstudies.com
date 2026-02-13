import { lastChancePeriod } from './lib/period';

export const feb04 = lastChancePeriod(
  Date.UTC(2026, 1, 4, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 1, 12, 8), // 2026-02-12T03:00:00-0500
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00:00-0500
);

export const feb13 = lastChancePeriod(
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 16, 8), // 2026-02-16T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 17, 8), // 2026-02-17T03:00 (08:00 UTC)
);
