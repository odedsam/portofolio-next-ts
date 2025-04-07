import Image from "next/image";
type SkillProps = {
  icon: string | React.SVGElementType;
  text: string;
};
export default function SkillCard(skils: SkillProps) {
  return (

      <div className="p-4 border border-gray-700 rounded-lg">
        <div className="bg-white bg-opacity-10 backdrop-blur-xl p-6 rounded-xl shadoe-neon border border-pink-500">
          <Image src={skils.icon} alt={skils.text} width={100} height={100} className="w-16 h-16 aimate-spin-slow" />
        </div>
      </div>
  );
}
