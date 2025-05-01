import { BookOpen, FolderKanban, Mail, Terminal, LucideIcon, Home } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

type NavLinksT = {
  href: string;
  icon?: LucideIcon;
  label?: string;
};
export const navLinksDesktop: NavLinksT[] = [
  { href: '/', label: 'Oded.Dev', icon:Terminal },
  { href: '/about', label: 'About Me', icon: BookOpen },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/contact', label: 'Contact', icon: Mail },
];


export const navLinksMobile = [
  { href: '/', label: 'Home', icon: Home  },
  { href: '/about', label: 'About', icon: BookOpen  },
  { href: '/projects', label: 'Projects', icon: FolderKanban  },
  { href: '/contact', label: 'Contact', icon: Mail  },
  { href: '/blog', label: 'Blog', icon: BookOpen  },
];


export const socials = [
  { href: 'https://github.com/fragged-up', icon: FaGithub },
  { href: 'https://linkedin.com/in/oded-shmuel-18484a338/', icon: FaLinkedin },
  { href: 'mailto:oded970@gmail.com', icon: FaEnvelope },
];
