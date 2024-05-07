'use client';
import HeaderLogo from '@/components/header/HeaderLogo';
import Navbar from '@/components/header/Navbar';
import SearchIcon from '@/components/header/icon/SearchIcon';
import { menuItems } from '@/constants/menuItems';
import { useSideMenuStore } from '../../../store/sideMenu.store';
import Sidebar from '@/components/header/Sidebar';

export default function HeaderItems() {
  const { isOpen } = useSideMenuStore();

  return (
    <>
      <div
        className={`w-full flex items-center transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}>
        <HeaderLogo />
        <Navbar menuItems={menuItems} />
        <SearchIcon />
      </div>

      {<Sidebar />}
    </>
  );
}
