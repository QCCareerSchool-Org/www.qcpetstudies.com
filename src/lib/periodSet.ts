import type { Period } from './period';

export class PromotionPeriodSet {
  constructor(public readonly ranges: readonly Period[]) { }

  public contains = (d: number): boolean => this.ranges.some(r => r.contains(d));
}
