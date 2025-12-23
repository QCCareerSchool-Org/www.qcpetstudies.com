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
