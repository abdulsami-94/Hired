'use client';

import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="p-10">
      <h1>Welcome to Hired</h1>
      <Button onClick={() => alert('It works!')}>
        Click Me
      </Button>
    </main>
  );
}