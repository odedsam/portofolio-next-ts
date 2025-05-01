'use client';
import { NavLinksDesk } from '../navigation/NavLinks';
import SocialLinks from '../navigation/SocialLinks';

export default function DesktopHeader() {
  return (
    <div className="flex items-center justify-between py-4 shadow-md px-12 fixed w-full top-0 z-100">
      <NavLinksDesk />
      <SocialLinks />
    </div>
  );
}

