import { navLinks } from '@/app/config/nav';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <div className="flex gap-6 items-center">
      {navLinks.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
