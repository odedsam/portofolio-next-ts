import { BookOpen, FolderKanban, Mail, Code } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const navLinks = [
  { href: '/', label: 'Oded.Dev', icon: Code },
  { href: '/about', label: 'About Me', icon: BookOpen },
  { href: '/projects', label: 'Projects', icon: FolderKanban },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const socials = [
  { href: 'https://github.com/fragged-up', icon: FaGithub },
  { href: 'https://linkedin.com/in/oded-shmuel-18484a338/', icon: FaLinkedin },
  { href: 'mailto:oded970@gmail.com', icon: FaEnvelope },
];
