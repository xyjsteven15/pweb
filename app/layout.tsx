import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xyjsteven15.github.io'),
  title: 'Steven Xu — Data, AI & Product',
  description: 'Portfolio of Steven Xu, a data scientist and product builder working across analytics, AI, and full-stack experiences.',
  openGraph: {
    title: 'Steven Xu — Data, AI & Product',
    description: 'Selected systems, experiments, and mini programs by Steven Xu.',
    url: 'https://xyjsteven15.github.io/pweb/',
    siteName: 'Steven Xu — Data, AI & Product',
    images: [{ url: '/pweb/og.jpg', width: 1200, height: 630, alt: 'Steven Xu — Data, AI & Product' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steven Xu — Data, AI & Product',
    description: 'Selected systems, experiments, and mini programs by Steven Xu.',
    images: ['/pweb/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
