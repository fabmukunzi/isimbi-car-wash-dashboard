import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../assets/css/globals.css';
import DashboardLayout from '../layouts/dashboard';
import { useRouter } from 'next/router';
import Login from './login';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import SignUp from './signup';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[1];
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {currentRoute === 'dashboard' ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : currentRoute === 'signup' ? (
          <SignUp {...pageProps} />
        ) : (
          <Login {...pageProps} />
        )}
      </PersistGate>
    </Provider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
