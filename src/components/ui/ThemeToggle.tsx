'use client';
import { useTheme } from 'next-themes';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
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
    <Card className="w-fit p-4">
      <CardContent className="flex items-center gap-4 px-0 py-0">
        <Label htmlFor="appearance">Appearance</Label>

        <SwitchButton onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} isDark={isDark}>
          {isDark ? (
            <Sun className="h-4 w-4 text-black" />
          ) : (
            <Moon className="h-4 w-4 text-white" />
          )}
        </SwitchButton>
      </CardContent>
    </Card>
  );
}
