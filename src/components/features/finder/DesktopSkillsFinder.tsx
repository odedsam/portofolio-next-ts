'use client';

import { useState } from 'react';
import { skillsMap, SkillCategory } from '@/data/skills-map';
import { SkillTile } from './SkillsTile';
import FinderThumbnails from './FinderThumbnails';

export function DesktopSkillsFinder() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');

  return (
    <div className="w-full rounded-xl overflow-hidden max-w-[95%] lg:max-w-[80%] xl:max-w-[70%] mx-auto border border-neutral-700 bg-zinc-900 shadow-md font-sans">
      <div className="flex items-center px-4 py-2 border-b border-neutral-700 bg-zinc-800">
        <div className="inline-flex">
          <FinderThumbnails />
        </div>
        <div className="flex ml-36">
          <p className="text-sm text-gray-300 font-medium">{activeCategory}</p>
        </div>
      </div>

      <div className="flex h-[500px]">
        <aside className="w-48 bg-zinc-800 p-4 space-y-3 border-r border-neutral-700 cursor-pointer">
          {Object.keys(skillsMap).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                activeCategory === category ? 'bg-zinc-700 text-white' : 'text-gray-300 hover:bg-zinc-700'
              }`}>
              {category}
            </button>
          ))}
        </aside>

        <main className="flex-1 grid grid-cols-5 grid-rows-2 place-items-center-safe">
          {skillsMap[activeCategory].map(({ icon, text }) => (
            <SkillTile key={text} icon={icon} label={text} />
          ))}
        </main>
      </div>
       <div className="px-4 py-2 text-xs text-gray-400 border-t border-neutral-700 text-center bg-zinc-800">
      </div>
    </div>
  );
}
