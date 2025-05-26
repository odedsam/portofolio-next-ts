import SkillCard from '../cards/SkillCard';

export default function SkillSection() {
  return (
    <div>
      <h2 className="text-[min(13vw,46px)] font-semibold mb-24 drop-shadow-2xl font-sans text-center transition-all duration-100 ease-in-out hover:text-neon-gray hover:scale-120 hover:drop-shadow-gray-900 dark:hover:drop-shadow-gray-50">
        Skills
      </h2>
      <SkillCard />
    </div>
  );
}
