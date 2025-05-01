import { navLinksDesktop, navLinksMobile } from '@/app/config/nav';
import Link from 'next/link';


type NavLinksMobile = {
  onClick?: () => void;
};

export function NavLinksDesk() {
  return (
    <div className="flex gap-6 items-center z-50">
      {navLinksDesktop.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex font-sans items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          {Icon && <Icon className="w-5 h-5" />}
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}


export function NavLinksMob({ onClick }: NavLinksMobile) {
  return (
     <>
        {navLinksMobile.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            onClick={onClick}
            className="flex items-center text-xl text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            {Icon && <Icon className="w-7 h-7 mr-3" />}
            {label}
          </Link>
        ))}
     </>
  );
}

