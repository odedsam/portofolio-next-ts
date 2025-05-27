'use client'

import { SkillCategory, SkillEntry, skillsMap } from '@/data/skills-map'
import { useState } from 'react'
import { SkillIcon } from '../SkillIcon'

export function SkillsFinder() {
  const [selected, setSelected] = useState<SkillCategory>('Frontend')

  return (
    <div className="flex h-[500px] w-full rounded-xl overflow-hidden border border-neutral-700 bg-zinc-900 shadow-md">
      <aside className="w-48 bg-zinc-800 p-4 space-y-3">
        {Object.keys(skillsMap).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key as SkillCategory)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition ${
              selected === key
                ? 'bg-zinc-700 text-white'
                : 'text-gray-300 hover:bg-zinc-700'
            }`}
          >
            {key}
          </button>
        ))}
      </aside>

      <main className="flex-1 grid grid-cols-4 gap-6 p-6 place-items-center">
        {skillsMap[selected].map((skill: SkillEntry) => (
          <SkillIcon key={skill.text} icon={skill.icon} label={skill.text} />
        ))}
      </main>
    </div>
  )
}
