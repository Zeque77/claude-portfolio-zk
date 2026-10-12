import { ThemeProvider } from "@/components/theme-provider";
import { hasConfiguredSiteUrl, siteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ezequiel Dominguez Pace — Product Designer",
    template: `%s | Ezequiel Dominguez Pace`,
  },
  description:
    "Ezequiel Dominguez Pace is a product and UX designer focused on AI, healthcare workflows, design systems, and complex B2B products.",
  applicationName: "Ezequiel Dominguez Pace — Product Designer",
  ...(hasConfiguredSiteUrl && { alternates: { canonical: "/" } }),
  openGraph: {
    title: "Ezequiel Dominguez Pace — Product Designer",
    description:
      "Product design for AI, healthcare, design systems, and complex workflows.",
    ...(hasConfiguredSiteUrl && { url: siteUrl }),
    siteName: "Ezequiel Dominguez Pace",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ezequiel Dominguez Pace — Product Designer",
    description: "Product design for AI, healthcare, design systems, and complex workflows.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
