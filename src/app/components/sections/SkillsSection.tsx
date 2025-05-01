import SkillCard from '../cards/SkillsDraft';
import { IconLabelProps } from '@/app/types';
type SkillProps = {
  skills: IconLabelProps[];
};
export default function SkillsSection({ skills }: SkillProps) {
  return (
    <div className="py-16 px-6 mx-16">
      <h2 className="text-[min(13vw,46px)] font-semibold font-sans mb-6 text-center text-white drop-shadow-lg">Skills</h2>
      <div className="grid cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Array.isArray(skills) && skills.map((sk, idx) => <SkillCard key={idx} icon={sk.icon} text={sk.text} />)}
      </div>
    </div>
  );
}
