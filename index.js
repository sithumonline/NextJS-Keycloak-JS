import { useSession } from 'next-auth/react';

export default function IndexPage() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // Redirecting to Keycloak login
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}


// src/pages/index.js