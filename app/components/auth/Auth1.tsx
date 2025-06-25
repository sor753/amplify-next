'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ConfigureAmplifyClientSide from '../amplify/ConfigureAmplify';

export default function Auth() {
  return (
    <>
      <ConfigureAmplifyClientSide />
      <div>
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <h1>Hello {user?.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </div>
    </>
  );
}
