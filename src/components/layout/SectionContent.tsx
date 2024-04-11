'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function SectionContent({ children }: { children: React.ReactNode }) {
  const isOverTablet = useMediaQuery('(min-width:768px)');
  return (
    <div
      className={`${isOverTablet ? ' px-16 py-6' : 'px-8 py-8 '} flex justify-center`}>
      <div className={`${isOverTablet ? 'w-[80%]' : 'w-[100%]'}`}>
        {children}
      </div>
    </div>
  );
}
