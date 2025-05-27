'use client'

import { useState } from 'react'
import { skillsMap, SkillCategory } from '@/data/skills-map'
import { SkillTile } from './SkillsTile'

export function SkillsExplorer() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend')

  return (
    <div className="w-full rounded-xl overflow-hidden border border-neutral-700 bg-zinc-900 shadow-md">
      {/* Top Finder Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700 bg-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="text-sm text-gray-300 font-medium">{activeCategory}</div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-xs cursor-pointer hover:text-white">View</span>
          <span className="text-gray-400 text-xs cursor-pointer hover:text-white">Edit</span>
          <span className="text-gray-400 text-xs cursor-pointer hover:text-white">Window</span>
          <span className="text-gray-400 text-xs cursor-pointer hover:text-white">Help</span>
          <input
            type="text"
            placeholder="Search"
            className="bg-zinc-700 text-sm text-white px-2 py-1 rounded-md outline-none placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex h-[500px]">
        <aside className="w-48 bg-zinc-800 p-4 space-y-3 border-r border-neutral-700">
          {Object.keys(skillsMap).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-zinc-700 text-white'
                  : 'text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {category}
            </button>
          ))}
        </aside>

        <main className="flex-1 grid grid-cols-4 gap-6 p-6 place-items-center">
          {skillsMap[activeCategory].map(({ icon, text }) => (
            <SkillTile key={text} icon={icon} label={text} />
          ))}
        </main>
      </div>
    </div>
  )
}
