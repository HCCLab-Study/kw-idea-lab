'use client';

import { MenuItem } from '@/constants/menuItems';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';

type Props = {
  menuItems: MenuItem[];
  onDeActiveSubMenu: () => void;
};
export default function SubMenu({ menuItems, onDeActiveSubMenu }: Props) {
  const segments = useSelectedLayoutSegments();

  return (
    <div
      className="absolute top-8 -left-[120px] w-[240px] px-8 py-6 rounded-sm bg-[rgba(247,247,247,1)] shadow-[0_0_10px_rgba(0,0,0,.55)]"
      onMouseLeave={onDeActiveSubMenu}>
      <ul className="flex flex-col text-black">
        {menuItems.map(item => (
          <li
            key={item.name}
            className={`px-2 py-1 ${segments.includes(item.name.toLowerCase()) ? 'text-white fill-white' : 'text-black fill-black'}`}>
            <Link href={item.href}>
              <span
                className={`${segments.includes(item.name.toLowerCase()) ? ' bg-[rgba(31,31,31,1)] font-bold' : ''} px-2 py-[2px] text-base`}>
                {item.value}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
