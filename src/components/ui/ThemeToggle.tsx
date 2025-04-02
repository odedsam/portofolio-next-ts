'use client'

import { useTheme } from 'next-themes'
import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <Card className="w-fit p-4">
      <CardContent className="flex items-center gap-4 px-0 py-0">
        <Label htmlFor="appearance">Appearance</Label>
        <Switch
          id="appearance"
          checked={isDark}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        >
          <span className="sr-only">Toggle theme</span>
        </Switch>
        <Moon className="h-4 w-4 text-muted-foreground" />
      </CardContent>
    </Card>
  )
}
