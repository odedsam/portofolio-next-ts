'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import SwitchButton from './SwitchButton';

type ThemeProps = {
  className?:string
}

export function ThemeToggle({className}:ThemeProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = resolvedTheme === 'dark';

  return (
    <SwitchButton onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} isDark={isDark}>
      {isDark ? <Sun className={cn("h-6 w-6 text-white",className)} /> : <Moon className={cn("h-6 w-6 text-black",className)} />}
    </SwitchButton>
  );
}
