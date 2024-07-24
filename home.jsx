import dynamic from 'next/dynamic';
import { ReactKeycloakProvider } from '@react-keycloak/web';


const App = ({ Component, pageProps }) => {
  const Keycloak = typeof window !== 'undefined' ? require('keycloak-js') : null;
  //const keycloak = Keycloak(); // will load instance configuration from keycloak.json

  const keycloakInitOptions = { onLoad: 'login-required' };
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={keycloakInitOptions}
      LoadingComponent={<LoadingScreen />}>
      <Component {...pageProps} />
    </ReactKeycloakProvider>
  );
};

// we have disabled SSR rendering here
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
