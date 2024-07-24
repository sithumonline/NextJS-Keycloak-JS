
import { useEffect, useState } from 'react';
import Keycloak from 'keycloak-js';

import Pages from './index';

function App({pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const keycloakConfig = {
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    };
    const keycloak = new Keycloak(keycloakConfig);

    keycloak.init({ onLoad: 'login-required' })
      .then(authenticated => {
        setIsAuthenticated(authenticated);
        if (authenticated) {
          keycloak.loadUserProfile().then(profile => {
            setUserProfile(profile);
          }).catch(error => {
            console.error("Failed to load user profile", error);
          });
        }
      })
      .catch(error => {
        console.error("Initialization failed", error);
      });
  }, []);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    
      <Pages {...pageProps} userProfile={userProfile} />
   
  );
}

export default App;

