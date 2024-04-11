import { MenuItem } from '@/constants/menuItems';
import Link from 'next/link';
import React from 'react';

type Props = {
  menuItems: MenuItem[];
};
export default function SubMenu({ menuItems }: Props) {
  return (
    <div className="border-2 border-black absolute top-8 -left-[80px] w-[180px] px-8 py-4 rounded-sm">
      <ul className="flex flex-col">
        {menuItems.map(item => (
          <li key={item.name} className="px-2 py-1">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
