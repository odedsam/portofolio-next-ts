import { socials } from '@/app/config/nav';
import { ThemeToggle } from '@/app/components/ui/ThemeToggle';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <div className="flex space-x-4">
        {socials.map(({ href, icon: Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Icon size={35} className="text-neon-blue hover:text-neon-pink transition" />
          </a>
        ))}
      </div>
    </div>
  );
}
