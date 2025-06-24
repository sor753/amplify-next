'use client';

import { useState } from 'react';
import SayHelloBtn from './SayHelloBtn';

export default function Hello({ sayHello }: { sayHello: () => Promise<string | undefined> }) {
  const [text, setText] = useState<string | undefined>(undefined);

  const handleClick = async () => {
    const result = await sayHello();
    setText(result);
  };

  return (
    <div className="text-[20px] text-center">
      <SayHelloBtn func={handleClick} />
      <p className="text-[20px]">{text}</p>
    </div>
  );
}
