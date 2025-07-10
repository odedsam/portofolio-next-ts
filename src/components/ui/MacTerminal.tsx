'use client';

import { useEffect, useState } from 'react';
import FinderThumbnails from '../../features/finder/FinderThumbnails';

const PROMPT = `I transform ideas into elegant, functional applications. With over 3 years of hands-on experience building end-to-end solutions, I blend creative design with robust backend architecture to create memorable digital experiences.`;

const MacTerminal = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < PROMPT.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + PROMPT[index]);
        setIndex((i) => i + 1);
      }, 75);
      return () => clearTimeout(timeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 7000);
      return () => clearTimeout(restartTimeout);
    }
  }, [index]);

  return (
    <div className="max-w-xl w-full mx-auto rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-700 font-jetbrains">
      <div className="flex items-center justify-between h-auto px-3 py-1 bg-zinc-800 font-jetbrains flex-wrap gap-y-1">
       <div className='pt-1'> <FinderThumbnails /></div>
        <p className="w-full text-center max-sm:mt-1 text-zinc-300 font-medium text-xs sm:text-sm leading-tight">
          Problem Solver | Self-Taught Coder
        </p>
        <div className="w-12" />
      </div>
      <div className="p-4 font-jetbrains text-sm text-zinc-100 whitespace-pre-line">
        <span className="text-green-400">➜</span> ~ {text}
        {index < PROMPT.length && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
};

export default MacTerminal;
