"use client";
import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between py-4">
      <h1 className="text-xl font-bold">Oded Samuel</h1>
      <ThemeToggle />
      <div>
      <FaGithub size={30} />
      </div>
    </div>
  );
}
