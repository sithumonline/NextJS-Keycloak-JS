import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Keycloak from 'keycloak-js';
import Cookies from 'js-cookie';
import MainComp from '.';
import Logout from './logout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const isAlreadyAuthenticated = Cookies.get('isAuthenticated');

    if (isAlreadyAuthenticated) {
      setIsAuthenticated(true);
    } else {
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
            Cookies.set('isAuthenticated', 'true', { expires: 1 });
            Cookies.set('keycloak-token', keycloak.token, { expires: 1 });
            Cookies.set('keycloak-refresh-token', keycloak.refreshToken, { expires: 1 });
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
    }
  }, []);

 
  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComp userProfile={userProfile} />} />
        <Route path="/logout" element={<Logout userProfile={userProfile} />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
);
}

export default App;

