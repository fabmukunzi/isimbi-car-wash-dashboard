import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../assets/css/globals.css';
import DashboardLayout from '../layouts/dashboard';
import { useRouter } from 'next/router';
import Login from './login';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1];
  return (
    <>
      {currentRoute === 'dashboard' ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <Login {...pageProps} />
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
