'use client';
import { ArrowLeft, BookOpen, FolderKanban, Mail } from 'lucide-react';
import { Menu, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideBar } from '../ui/SideBar';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 shadow-sm bg-white dark:bg-black lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-5 h-5 cursor-pointer" />
        </Button>
      </header>

      <SideBar isOpen={isSidebarOpen}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <ArrowLeft onClick={() => setIsSidebarOpen(false)} className="cursor-pointer" />
            <ThemeToggle />
          </div>

          <Link
            href="/"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center text-lg text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            <Home className="mr-3" /> Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center text-lg text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            <BookOpen className="mr-3" /> About
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center text-lg text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            <FolderKanban className="mr-3" /> Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center text-lg text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            <Mail className="mr-3" /> Contact
          </Link>

          <Link
            href="/blog"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center text-lg text-gray-700 dark:text-white hover:bg-gray-700 dark:hover:bg-gray-800 hover:text-white hover:scale-105 transition duration-300 ease-in-out p-2 rounded">
            <BookOpen className="mr-3" /> Blog
          </Link>
        </div>
      </SideBar>
    </>
  );
}
