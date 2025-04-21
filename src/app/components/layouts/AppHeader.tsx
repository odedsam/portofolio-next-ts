import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export default function AppHeader() {
  return (
    <div className="hidden lg:block">
      <DesktopHeader />
    </div>
  );
}
