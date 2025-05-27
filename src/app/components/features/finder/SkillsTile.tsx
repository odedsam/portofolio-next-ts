import Image from 'next/image'

type SkillTileProps = {
  icon: string
  label: string
}

export function SkillTile({ icon, label }: SkillTileProps) {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-105 transition-all cursor-pointer">
      <Image src={icon} alt={label} width={48} height={48} className='w-[48px] h-[48px]'/>
      <span className="text-sm text-gray-200">{label}</span>
    </div>
  )
}
