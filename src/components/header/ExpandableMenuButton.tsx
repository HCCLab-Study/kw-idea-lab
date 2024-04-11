'use client';

import SubMenu from '@/components/header/SubMenu';
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
  // TODO: Active
  return (
    <>
      <li className="flex relative" onClick={onActiveSubMenu}>
        <span>더보기</span>
        <span className="w-[24px] h-[24px]">
          <UnderArrowIcon />
        </span>
        {active && <SubMenu menuItems={subMenuItems} />}
      </li>
    </>
  );
}

function UnderArrowIcon() {
  return (
    <svg
      className="dvmRw"
      viewBox="0 0 24 24"
      stroke="currentColor"
      focusable="false">
      <g transform="translate(9.7,12) rotate(45)">
        <path className="K4B8Y" d="M-4.2 0 L4.2 0" stroke-width="2"></path>
      </g>
      <g transform="translate(14.3,12) rotate(-45)">
        <path className="MrYMx" d="M-4.2 0 L4.2 0" stroke-width="2"></path>
      </g>
    </svg>
  );
}
