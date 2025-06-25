import Image from 'next/image';

import { generateClient } from 'aws-amplify/api';
import { Schema } from '../amplify/data/resource';
import SayHelloBtn from './components/SayHelloBtn';
import Hello from './components/Hello';
import Auth from './components/auth/Auth2';

const client = generateClient<Schema>();

async function sayHelloServer(): Promise<string | undefined> {
  'use server';

  const data = await client.queries.sayHello({
    name: 'Barosanu',
  });
  console.log(data);
  return data.data ? data.data : undefined;
}

export default async function Home() {
  // const sayHelloClient = async (): Promise<string | undefined> => {
  //   const data = await sayHelloServer();
  //   return data;
  // };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <Hello sayHello={sayHelloServer} />
        <Auth />
      </main>
    </div>
  );
}
