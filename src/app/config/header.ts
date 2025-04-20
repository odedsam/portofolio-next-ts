import { BookOpen, FolderKanban, Mail, Code } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { href: "/", label: "Oded Samuel", icon: Code },
  { href: "/about", label: "About Me", icon: BookOpen },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export const socials = [
  { href: "https://github.com", icon: FaGithub },
  { href: "https://linkedin.com", icon: FaLinkedin },
  { href: "mailto:oded@example.com", icon: FaEnvelope },
];
