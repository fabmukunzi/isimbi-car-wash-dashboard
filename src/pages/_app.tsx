import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../assets/css/globals.css';
import AppLayout from '../layouts/dashboard';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    // <AppLayout>
      <Component {...pageProps} />
    // </AppLayout>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
