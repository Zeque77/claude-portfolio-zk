const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export const hasConfiguredSiteUrl = Boolean(configuredUrl);
export const siteUrl = configuredUrl ?? "http://localhost:3000";