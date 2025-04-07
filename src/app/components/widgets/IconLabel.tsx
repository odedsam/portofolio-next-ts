import type { IconLabelProps } from "@/app/types";
import Image from "next/image";

export default function IconLabel({ icon, text }: IconLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <Image src={icon} alt={`${icon}-svg`} width={40} height={40} className="w-10 h-10 max-w-10" />
      <p className="font-sans font-medium text-sm text-center">{text}</p>
    </div>
  );
}
