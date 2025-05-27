import { ResponsiveSkills } from '../features/finder/ResponsiveSkillBox';

export default function SkillsSection() {
  return (
    <section className="py-12 my-4 max-sm:my-24">
      <h2 className="my-42 text-[min(13vw,46px)] font-semibold mb-24 drop-shadow-2xl font-sans text-center transition-all duration-100 ease-in-out hover:text-neon-gray hover:scale-120 hover:drop-shadow-gray-900 dark:hover:drop-shadow-gray-50">
        Skills
      </h2>
      <ResponsiveSkills />
    </section>
  );
}

