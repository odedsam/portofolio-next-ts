import { cn } from '@/lib/utils';
import React from 'react';

type SwitchBtnProps = {
  children: React.ReactNode | React.ReactSVGElement;
  onClick?: (event: any) => void;
  isDark?: boolean; // Add isDark prop to control icon position
  className?: string;
};

export default function SwitchButton({ children, onClick, isDark, className }: SwitchBtnProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        className,
        'inline-flex h-[2.15rem] w-16 shrink-0 items-center rounded-full shadow-xs transition-all outline-none disabled:opacity-50 relative border-2',
      )}>
      <div
        className={cn(
          'absolute transition-transform duration-200 ease-in-out',
          isDark ? 'translate-x-2 scale-100' : 'translate-x-8 scale-110',
        )}>
        {children}
      </div>
    </button>
  );
}

// className="bg-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:opacity-50"
