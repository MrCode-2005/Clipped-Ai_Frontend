import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clipped-ai-frontend.vercel.app'),
  title: 'ClippedAI: #1 AI video clipping and editing tool',
  description: 'ClippedAI turns long videos into shorts, and publishes them to all social platforms in one click. Trusted by 12 million video creators.',
  keywords: ['AI video editor', 'video clipping', 'short form video', 'ClippedAI', 'video repurposing', 'AI shorts'],
  openGraph: {
    title: 'ClippedAI: #1 AI video clipping and editing tool',
    description: 'ClippedAI turns long videos into shorts, and publishes them to all social platforms in one click.',
    type: 'website',
    url: 'https://clipped-ai-frontend.vercel.app',
    images: [
      {
        url: '/images/og-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'ClippedAI - AI Video Clipping Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClippedAI: #1 AI video clipping and editing tool',
    description: 'ClippedAI turns long videos into shorts, and publishes them to all social platforms in one click.',
    images: ['/images/og-thumbnail.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/GeistVF.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Poppins-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-geist antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
