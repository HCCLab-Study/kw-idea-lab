'use client';

import ExpandableMenuButton from '@/components/header/ExpandableMenuButton';
import { MenuItem } from '@/constants/menuItems';
import { useHeaderSize } from '@/hooks/useDeviceSize';
import Link from 'next/link';

type Props = {
  menuItems: MenuItem[];
};

export default function Navbar({ menuItems }: Props) {
  const { isShowHamburgerMenu, showNumber } = useHeaderSize();

  if (isShowHamburgerMenu) {
    return null;
  }
  const showMenuItems = menuItems.slice(0, showNumber);
  const hiddenMenuItems = menuItems.slice(showNumber);

  return (
    <nav className="flex flex-1 justify-end items-center">
      <ul className="flex gap-x-6">
        {/* TODO: 더 분리를 할 수 있지 않을까? 분리를 하면 더 좋은 코드가 될까? */}
        {showMenuItems.map(item => (
          <li key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        {hiddenMenuItems.length > 0 && (
          <ExpandableMenuButton subMenuItems={hiddenMenuItems} />
        )}
      </ul>
    </nav>
  );
}
