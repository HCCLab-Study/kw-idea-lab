'use client';

import { useCheckScrolled } from '@/hooks/useCheckScrolled';
import { useSelectedLayoutSegments } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function HeaderContainer({ children }: PropsWithChildren) {
  const { scrolled } = useCheckScrolled();
  const segment = useSelectedLayoutSegments();

  const initialStyleInHome =
    segment?.includes('home') && !scrolled
      ? 'text-white fill-white'
      : 'text-black fill-black';

  return (
    <header
      className={`w-[100%] flex px-3 py-4 items-center max-h-14 fixed z-10 ${scrolled ? 'bg-white' : 'bg-transparent'} ${initialStyleInHome}`}>
      {children}
    </header>
  );
}
