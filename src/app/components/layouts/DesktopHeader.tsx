'use client';
import NavLinks from '../navigation/NavLinks';
import SocialLinks from '../navigation/SocialLinks';

export default function DesktopHeader() {
  return (
    <div className="flex items-center justify-between py-4 px-12">
      <NavLinks />
      <SocialLinks />
    </div>
  );
}
