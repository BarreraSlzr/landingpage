import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from '@vercel/analytics/react'
import content from './content.json'
import { Suspense } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: `${content.companyName} | ${content.hero.title}`,
  description: `Discover ${content.companyName}: ${content.hero.description}. Located at ${content.companyInfo.address2}. Making ${content.companyInfo.address1}.`,
  keywords: `${content.companyName}, internet friends, ${content.navigation.join(', ')}, ${content.keywords.join(', ')}`,
  // viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: `${content.companyName} | ${content.hero.description}`,
    description: `Learn more about ${content.companyName}.`,
    url: 'https://www.internetfriends.xyz',
    images: [
      {
        url: '/600x600.jpg',
        width: 600,
        height: 600,
        alt: 'InternetFriends.xyz logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.companyName} | ${content.hero.title}`,
    description: `Discover ${content.companyName}: ${content.hero.description}.`,
    images: ['/600x600.jpg'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-brand-blue-800 text-brand-blue-200`}
      >
        <Suspense fallback='Loading'>
          {children}
          <Analytics />
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
