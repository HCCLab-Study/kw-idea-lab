import HamburgerIcon from '@/components/header/icon/HamburgerIcon';
import { HeaderContainer } from '@/components/header/HeaderContainer';
import Navbar from '@/components/header/Navbar';
import SearchIcon from '@/components/header/icon/SearchIcon';
import { menuItems } from '@/constants/menuItems';
import HeaderLogo from '@/components/header/HeaderLogo';
import HeaderItems from '@/components/header/HeaderItems';

export default function Header() {
  return (
    <HeaderContainer>
      <HamburgerIcon />
      {/* <HeaderLogo />
      <Navbar menuItems={menuItems} />
      <SearchIcon /> */}
      <HeaderItems />
    </HeaderContainer>
  );
}

// function Navs() {
//   return (
//     <div className="w-full flex items-center">
//       <HeaderLogo />
//       <Navbar menuItems={menuItems} />
//       <SearchIcon />
//     </div>
//   );
// }
