import { Inter } from 'next/font/google';

import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/Providers';
import { constructMetadata } from '@/lib/utils';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <main className='flex flex-col min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex-1 flex flex-col h-full'>
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
