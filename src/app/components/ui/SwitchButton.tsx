import { cn } from '@/lib/utils';
import React from 'react';

type SwitchBtnProps = {
  children: React.ReactNode | React.ReactSVGElement;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDark?: boolean;
  className?: string;
};

export default function SwitchButton({ children, onClick, isDark, className }: SwitchBtnProps) {
  return (
    <button onClick={onClick} className={cn(className, 'cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 rounded-full p-2')}>
      {children}
    </button>
  );
}
