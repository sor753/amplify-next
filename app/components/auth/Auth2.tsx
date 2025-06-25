'use client';

import { Authenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';
import ConfigureAmplifyClientSide from '../amplify/ConfigureAmplify';
import { useEffect, useState } from 'react';

export default function Auth() {
  return (
    <>
      <ConfigureAmplifyClientSide />
      <div>
        <Authenticator signUpAttributes={['nickname']}>
          {({ signOut }) => (
            <main>
              <UserDetails />
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      </div>
    </>
  );
}

function UserDetails() {
  const [nickName, setNickname] = useState<string>();

  useEffect(() => {
    (async () => {
      const userData = await fetchUserAttributes();
      setNickname(userData.nickname);
    })();
  }, []);

  return (
    <div>
      <h1>Hello {nickName}</h1>
    </div>
  );
}
