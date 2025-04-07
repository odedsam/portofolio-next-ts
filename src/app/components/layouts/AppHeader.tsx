"use client";
import { FaGithub } from "react-icons/fa";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between py-4 px-24">
      <h1 className="text-xl font-sans font-bold">Oded Samuel</h1>
      <div className="flex justify-center items-center gap-4">
      <ThemeToggle />
      <FaGithub size={30} />
      </div>
    </div>
  );
}
