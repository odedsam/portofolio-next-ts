import { SkillsExplorer } from './SkillsExplorer'

export function SkillsSection() {
  return (
    <section className="py-12">
      <h2 className="text-center text-4xl font-bold mb-10 text-white drop-shadow">
        Skills
      </h2>
      <SkillsExplorer />
    </section>
  )
}
