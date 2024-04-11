import { oswald } from '@/app/layout';
import HamburgerIcon from '@/components/header/HamburgerIcon';
import { HeaderContainer } from '@/components/header/HeaderContainer';
import Navbar from '@/components/header/Navbar';
import SearchIcon from '@/components/header/SearchIcon';
import { menuItems } from '@/constants/menuItems';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <HeaderContainer>
      <HamburgerIcon />
      <HeaderLogo />
      <Navbar menuItems={menuItems} />
      <SearchIcon />
    </HeaderContainer>
  );
}

function HeaderLogo() {
  return (
    <Link href="/home">
      <div className="flex items-center">
        <span className="py-2 px-3">
          <Image
            src="/assets/image/kw-icon.jpeg"
            alt="kwangwoon icon"
            height={40}
            width={141.641}
          />
        </span>
        <span className={`py-4 px-3 text-xl ${oswald.className} font-[400]`}>
          IDEA Lab
        </span>
      </div>
    </Link>
  );
}
