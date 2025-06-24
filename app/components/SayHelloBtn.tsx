'use client';

export default function SayHelloBtn({ func }: { func: () => void }) {
  return <button onClick={func}>Click me</button>;
}
