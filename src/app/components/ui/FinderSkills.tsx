// 'use client'

// import { useState } from 'react'
// import { skillsData, SkillCategory, Skill } from '@/data/skills'
// import Image from 'next/image'

// export default function FinderSkills() {
//   const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend')

//   return (
//     <div className="flex h-[500px] w-full border border-gray-700 bg-zinc-900 text-white rounded-xl overflow-hidden">
//       {/* Sidebar */}
//       <aside className="w-48 bg-zinc-800 p-4 space-y-2">
//         {Object.keys(skillsData).map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category as SkillCategory)}
//             className={`w-full text-left px-2 py-1 rounded hover:bg-zinc-700 ${
//               activeCategory === category ? 'bg-zinc-700 font-semibold' : ''
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </aside>

//       {/* Content */}
//       <main className="flex-1 p-6 grid grid-cols-4 gap-6 place-items-center">
//         {skillsData[activeCategory].map((skill: Skill) => (
//           <div key={skill.text} className="flex flex-col items-center gap-2">
//             <Image src={skill.icon} alt={skill.text} width={48} height={48} />
//             <span className="text-sm">{skill.text}</span>
//           </div>
//         ))}
//       </main>
//     </div>
//   )
// }
