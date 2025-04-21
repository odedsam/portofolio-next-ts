import { cn } from '@/lib/utils';

type SidebarProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
};

export const SideBar = ({ children, className, isOpen }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'h-screen w-64 bg-background border-r dark:border-gray-800 p-4 fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out',
        className,
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:hidden',
      )}>
      <nav className="flex flex-col gap-4">{children}</nav>
    </aside>
  );
};
