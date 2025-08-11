import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome() {
  return (
    <div className="w-full mt-10 flex justify-center">
      <Link
        href="/"
        aria-label="Back to homepage"
        className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-primary/90 transition-all duration-200 shadow-md text-shadow-black dark:text-white">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
