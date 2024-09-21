import { metadata } from '@/configs/metadata/defaults';
import { Inter } from 'next/font/google';
import type { ReactNodeLike } from 'prop-types';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: NonNullable<ReactNodeLike>;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}

export { metadata };
