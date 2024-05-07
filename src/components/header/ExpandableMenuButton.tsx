'use client';

import SubMenu from '@/components/header/SubMenu';
import UnderArrowIcon from '@/components/header/icon/UnderArrowIcon';
import { MenuItem } from '@/constants/menuItems';
import { useState } from 'react';

type Props = {
  subMenuItems: MenuItem[];
};

export default function ExpandableMenuButton({ subMenuItems }: Props) {
  const [active, setActive] = useState(false);

  const onActiveSubMenu = () => {
    setActive(true);
  };
  const onDeActiveSubMenu = () => {
    setActive(false);
  };

  return (
    <>
      <li
        className="flex relative px-2 py-1"
        onClick={onActiveSubMenu}
        onMouseEnter={onActiveSubMenu}>
        <span>더보기</span>
        <span className="w-[24px] h-[24px]">
          <UnderArrowIcon />
        </span>
        {active && (
          <SubMenu
            menuItems={subMenuItems}
            onDeActiveSubMenu={onDeActiveSubMenu}
          />
        )}
      </li>
    </>
  );
}
