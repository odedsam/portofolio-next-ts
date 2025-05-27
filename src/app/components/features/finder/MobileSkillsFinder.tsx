'use client';

import { skillsMap } from '@/data/skills-map';
import Image from 'next/image';
import FinderThumbnails from './FinderThumbnails';

export function MobileSkillsFinder() {
  return (
    <div className="w-full max-w-xs mx-auto rounded-xl overflow-hidden border border-neutral-700 bg-zinc-900 shadow-md flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700 bg-zinc-800">
        <FinderThumbnails />
        <span className="text-sm text-gray-300 font-medium text-center">Tech Stack</span>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto bg-zinc-900">
        {Object.entries(skillsMap).map(([category, items]) => (
          <div key={category} className="px-4 py-6 border-b border-neutral-800">
            <h2 className="text-sm font-semibold text-gray-300 mb-8">{category}</h2>
            <div className="grid grid-cols-3 gap-4">
              {items.map(({ icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center">
                  <Image src={icon} alt={text} width={40} height={40} className="object-contain w-10 h-10" />
                  <span className="text-xs text-gray-200 mt-1">{text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 text-xs text-gray-400 border-t border-neutral-700 text-center bg-zinc-800"></div>
    </div>
  );
}
