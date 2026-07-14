const esps = [ 'Brevo', 'ActiveCampaign' ] as const;

export type ESP = typeof esps[number];

export const isEsp = (value: unknown): value is ESP => {
  return typeof value === 'string' && esps.includes(value as ESP);
};
