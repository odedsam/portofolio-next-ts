"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "../ui/ThemeToggle";
import { BookOpen, FolderKanban, Mail } from "lucide-react";
import Link from "next/link";
import { Code } from "lucide-react";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between py-4 px-12">
      <Link href="/" className="cursor-pointer text-xl font-sans font-bold">
        <span> Oded Samuel</span>
        <Code className="w-5 h-5" />
      </Link>

      <Link
        href="/about"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        <span>About Me</span>
      </Link>

      <Link
        href="/projects"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <FolderKanban className="w-5 h-5" />
        <span>Projects</span>
      </Link>
      <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline">
        <BookOpen className="w-5 h-5" /> Blog
      </Link>

      {/* Contact Link */}
      <Link href="/contact" className="flex items-center gap-2 text-primary hover:underline">
        <Mail className="w-5 h-5" /> Contact
      </Link>

      <div className="flex justify-center items-center gap-4">
        <ThemeToggle />

        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} className="text-neon-blue hover:text-neon-pink transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} className="text-neon-blue hover:text-neon-pink transition" />
          </a>
          <a href="mailto:oded@example.com">
            <FaEnvelope size={35} className="text-neon-blue hover:text-neon-pink transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
