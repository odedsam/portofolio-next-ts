import { cn } from '@/lib/utils';
import React from 'react';

type SwitchBtnProps = {
  children: React.ReactNode | React.ReactSVGElement;
  onClick?: (event: any) => void;
  isDark?: boolean; // Add isDark prop to control icon position
};

export default function SwitchButton({ children, onClick, isDark }: SwitchBtnProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full shadow-xs transition-all outline-none disabled:opacity-50 relative border-2',
      )}
    >
      <div
        className={cn(
          'absolute transition-transform duration-200 ease-in-out',
          isDark
            ? 'translate-x-0 scale-100' // Move left and return to original scale
            : 'translate-x-4 scale-110', // Move right and scale up slightly
        )}
      >
        {children}
      </div>
    </button>
  );
}

// className="bg-primary focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:opacity-50"
