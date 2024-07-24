import { useEffect } from 'react';
import Keycloak from 'keycloak-js';
import Cookies from 'js-cookie';
import Router from 'next/router'; // Import Router


const Logout = () => {
  useEffect(() => {
    const keycloakConfig = {
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    };
    const keycloak = new Keycloak(keycloakConfig);

    keycloak.init({ onLoad: 'check-sso' }).then(() => {
      Cookies.remove('isAuthenticated');
      Cookies.remove('keycloak-token');

      keycloak.logout({ redirectUri: `${window.location.origin}` }).then(() => {
        // Redirect after successful logout
        Router.push('/'); // Ensure this path matches your login route
      });
    });
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;