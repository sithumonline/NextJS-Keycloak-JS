import Image from "next/image";
import diagram from "../../../public/test-diagram.png";
import { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

export default function Overview() {
  const [userRealmRoles, setUserRealmRoles] = useState([]);
  useEffect(() => {
    const keycloakConfig = {
      url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    };
    const keycloak = new Keycloak(keycloakConfig);
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      if (authenticated) {
        if (keycloak.realmAccess) {
          setUserRealmRoles(keycloak.realmAccess.roles);
        }
      }
    });
  }, []);
  return (
    <section className="w-full pt-12 flex flex-col gap-12">
      <div className="w-full px-12">
        <Image className="w-3/4 mx-auto" src={diagram} alt="diagram" />
      </div>
      <div className="w-full px-12">
        <div className="w-4/5 mx-auto flex flex-col gap-4">
          <h2 className="uppercase text-2xl">User Realm Roles</h2>
          <ul className="w-1/2 mx-auto flex flex-col gap-2">
            {userRealmRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
        {
          /* check if user has the maintainer role */
          userRealmRoles.includes("maintainer") ? (
            <div className="w-4/5 mx-auto flex flex-col gap-4">
              <h2 className="uppercase text-2xl">Maintainer Section</h2>
              <p>Only maintainers can see this section</p>
            </div>
          ) : null
        }
      </div>
    </section>
  );
}
