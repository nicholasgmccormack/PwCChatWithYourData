<<<<<<< HEAD
import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
=======
import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Toaster } from '@/components/ui/toaster';
import { CredentialsCookieProvider } from '@/context/credentials-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CredentialsCookieProvider>
        <Component {...pageProps} />
        <Toaster />
      </CredentialsCookieProvider>
    </>
  );
}

export default MyApp;
>>>>>>> 193008a8b8225f7fd98ddbaa04459afe458571f1
