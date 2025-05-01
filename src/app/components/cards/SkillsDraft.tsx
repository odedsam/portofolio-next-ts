import Image from "next/image";
type SkillProps = {
  icon: string | React.SVGElementType;
  text: string;
};
export default function SkillsDraft(skils: SkillProps) {
  return (

      <div className="p-4 border border-gray-700 rounded-lg cursor-pointer">
        <div className="g-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-xl border  border-opacity-30 hover:scale-105 transition duration-300 shadoe-neon border-pink-500 cursor-pointer">
          <Image src={skils.icon} alt={skils.text} width={100} height={100} className="w-16 h-16 aimate-spin-slow cursor-pointer" />
        </div>
      </div>
  );
}
