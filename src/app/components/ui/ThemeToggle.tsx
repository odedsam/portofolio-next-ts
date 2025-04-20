'use client';
import { useTheme } from 'next-themes';
import { Card, CardContent } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import SwitchButton from './SwitchButton';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const isDark = resolvedTheme === 'dark';

  return (
    <SwitchButton onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} isDark={isDark}>
      {isDark ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-black" />}
    </SwitchButton>
  );
}
