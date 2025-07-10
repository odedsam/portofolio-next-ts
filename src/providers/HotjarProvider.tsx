'use client';

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

type HotjarProviderProps = {
  id?: string | number;
  snippetVersion?: number;
};

export default function HotjarProvider({
  id,
  snippetVersion = 6,
}: HotjarProviderProps) {
  useEffect(() => {
    if (!id) return;
    hotjar.initialize({ id: typeof id === 'string' ? parseInt(id, 10) : id, sv: snippetVersion });
  }, [id, snippetVersion]);

  return null;
}
