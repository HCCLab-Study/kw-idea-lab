'use client';
import ExpandableMenuButton from '@/components/header/ExpandableMenuButton';
import { MenuItem } from '@/constants/menuItems';
import { useCheckScrolled } from '@/hooks/useCheckScrolled';
import { useHeaderSize } from '@/hooks/useDeviceSize';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

type Props = {
  menuItems: MenuItem[];
};

export default function Navbar({ menuItems }: Props) {
  const { isShowHamburgerMenu, showNumber } = useHeaderSize();
  const segments = useSelectedLayoutSegments();
  const { scrolled } = useCheckScrolled();

  if (isShowHamburgerMenu) {
    // 특정 너비보다 작아지면 햄버거 메뉴로 변경 (NavBar는 보여지지 않음)
    return null;
  }

  const showMenuItems = menuItems.slice(0, showNumber);
  const hiddenMenuItems = menuItems.slice(showNumber);

  const isHome = segments.includes('home');
  const initialStyleInHome =
    isHome && !scrolled ? 'text-white fill-white' : 'text-black fill-black';

  return (
    <nav className="flex flex-1 justify-end items-center">
      <ul className="flex gap-x-6 items-center">
        {/* TODO: 더 분리를 할 수 있지 않을까? 분리를 하면 더 좋은 코드가 될까? */}
        {showMenuItems.map(item => (
          <li
            key={item.name}
            className={`${segments.includes(item.name.toLowerCase()) ? 'bg-[rgba(31,31,31,1)] text-white' : ''} px-2 py-1 ${initialStyleInHome}`}>
            <Link href={item.href}>{item.value}</Link>
          </li>
        ))}
        {hiddenMenuItems?.length > 0 && (
          <ExpandableMenuButton subMenuItems={hiddenMenuItems} />
        )}
      </ul>
    </nav>
  );
}
