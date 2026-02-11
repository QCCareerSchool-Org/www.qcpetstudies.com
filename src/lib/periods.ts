import { LastChancePeriod, Period } from './period';

export const endOfYear2025 = new Period(
  Date.UTC(2025, 11, 26, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 0, 3, 8), // 2026-01-03T03:00:00-0500
);

export const newYear2026 = new Period(
  Date.UTC(2026, 0, 5, 8), // 2026-01-05T03:00:00-0500
  Date.UTC(2026, 0, 17, 8), // 2026-01-17T03:00:00-0500
);

export const feb04 = new LastChancePeriod(
  Date.UTC(2026, 1, 4, 8), // 2025-12-26T03:00:00-0500 (08:00 UTC)
  Date.UTC(2026, 1, 12, 8), // 2026-02-12T03:00:00-0500 (08:00 UTC)
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00:00-0500 (08:00 UTC)
);

export const feb13 = new LastChancePeriod(
  Date.UTC(2026, 1, 13, 8), // 2026-02-13T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 16, 8), // 2026-02-16T03:00 (08:00 UTC)
  Date.UTC(2026, 1, 17, 8), // 2026-02-17T03:00 (08:00 UTC)
);
