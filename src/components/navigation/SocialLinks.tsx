import { socials } from '@/app/config/nav';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <div className="flex space-x-4">
        {socials.map(({ href, icon: Icon }) => {
          return (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="w-6 h-6 text-neon-blue hover:text-neon-pink transition" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
