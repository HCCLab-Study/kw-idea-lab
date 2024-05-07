'use client';
import { menuItems } from '@/constants/menuItems';
import { useSideMenuStore } from '../../../store/sideMenu.store';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const delays = [
  'delay-[425ms]',
  'delay-[550ms]',
  'delay-[675ms]',
  'delay-[800ms]',
  'delay-[925ms]',
  'delay-[1050ms]',
];

export default function Sidebar() {
  const { isOpen, closeSideMenu } = useSideMenuStore();
  const segments = useSelectedLayoutSegments();

  return (
    <>
      <aside
        className={`fixed top-0 pt-12 -ml-[12px] bg-white pl-4 h-[100vh] transition-transform delay-300 -translate-x-[1000px] duration-100 z-50 max-w-[80%] ${isOpen ? 'translate-x-[0px] bg-[rgb(247,247,247)]' : ''}`}>
        <ul className="pt-6 flex flex-col gap-y-6 text-[16px] min-w-[200px]">
          {menuItems.map((item, idx) => {
            // const delay = `delay-[${(idx + 1) * 125 + 300}]`;
            return (
              <li
                key={item.name}
                className={`transition-transform duration-100 -translate-x-[1000px] ${delays[idx]} ${isOpen ? 'translate-x-[0px]' : '-translate-x-[500px]'} ${segments.includes(item.name.toLowerCase()) ? 'text-white font-bold' : 'text-black'}`}
                onClick={closeSideMenu}>
                <Link href={item.href}>
                  <span
                    className={`ml-[4px] px-[6px] ${segments.includes(item.name.toLowerCase()) ? 'bg-[rgba(31,31,31,1)]' : ''}`}>
                    {item.value}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <div
        className={`fixed min-w-[100vw] -ml-3 min-h-[100%] bg-[rgba(0,0,0,0.6)] top-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'hidden opacity-0'}`}
        onClick={closeSideMenu}></div>
    </>
  );
}
