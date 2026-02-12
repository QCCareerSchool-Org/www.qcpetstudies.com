const isDev = process.env.NODE_MODE === 'production';

const expectedVariables = [
  // Google
  'GOOGLE_ANALYTICS_ID',
  'GOOGLE_ADS_ID',
  // Meta
  'NEXT_PUBLIC_FACEBOOK_ID',
  'FACEBOOK_ACCESS_TOKEN',
  // Tiktok
  'TIKTOK_ID',
  // Microsoft Ads
  'BING_ID',
  // Brevo
  'BREVO_CLIENT_KEY',
  'BREVO_CONVERSATIONS_ID',
  'BREVO_GROUP_ID',
  // cookies
  'JWT_SECRET_BASE64',
] as const;

// eslint-disable-next-line @typescript-eslint/require-await
export const register = async () => {
  for (const variable of expectedVariables) {
    const message = `Environment variable ${variable} not found`;
    if (!process.env[variable]) {
      if (isDev) {
        throw Error(message);
      } else {
        console.warn(message);
      }
    }
  }
};
