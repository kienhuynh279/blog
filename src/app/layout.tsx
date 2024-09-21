import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import type { ReactNodeLike } from 'prop-types';
import { Toaster } from 'react-hot-toast';

import { metadata } from '@/configs/metadata/defaults';
import { ThemeWrapper } from '@/configs/theme-wrapper';
import ReactQueryProviders from '@/libs/react-query-provider';

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
        <ReactQueryProviders>
          <ThemeWrapper>{children}</ThemeWrapper>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProviders>

        <Toaster
          containerStyle={{ zIndex: 99999 }}
          toastOptions={{
            style: {
              background: '#303641',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}

export { metadata };
