export class PromotionPeriod {
  private static readonly formatter = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  constructor(public readonly start: number, public readonly end: number) {
    if (start > end) {
      throw new Error('Range start must be <= end');
    }
  }

  public static span(...ranges: readonly PromotionPeriod[]): PromotionPeriod {
    if (ranges.length === 0) {
      throw new Error('Need at least one range');
    }

    let start = ranges[0].start;
    let end = ranges[0].end;

    for (const r of ranges) {
      if (r.start < start) {
        start = r.start;
      }
      if (r.end > end) {
        end = r.end;
      }
    }

    return new PromotionPeriod(start, end);
  }

  public contains = (d: number): boolean => d >= this.start && d < this.end;

  public toString = (): string => `[${PromotionPeriod.formatter.format(this.start)}, ${PromotionPeriod.formatter.format(this.end)})`;
}

export const endOfYear2025 = new PromotionPeriod(
  Date.UTC(2025, 11, 26, 8), // 2025-12-26T03:00:00-0500
  Date.UTC(2026, 0, 3, 8), // 2026-01-03T03:00:00-0500
);

export const newYear2026 = new PromotionPeriod(
  Date.UTC(2026, 0, 7, 8), // 2026-01-07T03:00:00-0500
  Date.UTC(2026, 0, 17, 8), // 2026-01-17T03:00:00-0500
);
