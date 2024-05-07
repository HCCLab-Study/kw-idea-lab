'use client';

import { useHeaderSize } from '@/hooks/useDeviceSize';
import Hamburger from 'hamburger-react';
import { useSideMenuStore } from '../../../../store/sideMenu.store';

export default function HamburgerIcon() {
  const { isShowHamburgerMenu } = useHeaderSize();
  const { toggleSideMenu, isOpen } = useSideMenuStore();
  // const [isOpen, setIsOpen] = useState(false);

  if (!isShowHamburgerMenu) return null;

  return (
    <div
      className="w-10 h-10 flex justify-center items-center cursor-pointer"
      onClick={toggleSideMenu}>
      <div className="z-[60]">
        <Hamburger size={18} toggled={isOpen} />
      </div>
    </div>
  );
}
