import { PromotionPeriod } from './promotionPeriod';

export const endOfYear2025 = new PromotionPeriod(
  Date.UTC(2025, 11, 26, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 0, 3, 8), // 2026-01-03T03:00:00-0500
);

export const newYear2026 = new PromotionPeriod(
  Date.UTC(2026, 0, 7, 8), // 2026-01-07T03:00:00-0500
  Date.UTC(2026, 0, 17, 8), // 2026-01-17T03:00:00-0500
);
