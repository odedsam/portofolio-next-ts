// test.js
'use client';
import { useTheme } from 'next-themes';
import { ThemeProvider,  } from './providers/ThemeProvider';
import { useEffect, useState } from 'react';

function Test() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
      <div className="bg-background text-foreground p-4">Test Text</div>
    </div>
  );
}

export default function TestPage() {
  return (
    <ThemeProvider attribute="class">
      <Test />
    </ThemeProvider>
  );
}
