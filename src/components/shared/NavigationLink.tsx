'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  exact?: boolean;
};

const NavigationLink = ({
  href,
  children,
  className,
  activeClassName = 'text-blue-600 font-semibold',
  inactiveClassName = '',
  target,
  rel,
  exact = true,
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isExternal = /^https?:\/\//.test(href);
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const mergedClass = cn(
    'transition-colors duration-200',
    className,
    isActive ? activeClassName : inactiveClassName,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={mergedClass}
        target={target ?? '_blank'}
        rel={rel ?? 'noopener noreferrer'}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={mergedClass} aria-current={isActive ? 'page' : undefined}>
      {children}
    </Link>
  );
};

export default NavigationLink;

/*  usage

# basic usage
<NavigationLink href="/">Home</NavigationLink>

# links with matching  based prefix route / will match also dashboard/settings
<NavigationLink href="/dashboard" exact={false}>Dashboard</NavigationLink>



# Adding className + activeClassName + inactiveClassName
<NavigationLink
  href="/projects"
  className="px-4 py-2 text-sm"
  activeClassName="text-blue-600 font-bold underline"
  inactiveClassName="text-gray-500 hover:text-gray-800">
  Projects
</NavigationLink>

# smart external link
<NavigationLink href="https://github.com/oded-dev">
  GitHub
</NavigationLink>

# external link with adopted target
<NavigationLink href="https://linkedin.com/in/oded-dev" target="_self">
  LinkedIn
</NavigationLink>


*/
