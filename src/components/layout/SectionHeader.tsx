'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  headerTitle: string;
};

export function SectionHeader({ headerTitle }: Props) {
  const isOverTablet = useMediaQuery('(min-width:768px)');
  return (
    <header
      className={`${isOverTablet ? ' px-16 py-6' : 'px-8 py-8 '} flex justify-center`}>
      <div className={`${isOverTablet ? 'w-[80%]' : 'w-[100%]'}`}>
        <h2 className="text-[30px]">{headerTitle}</h2>
      </div>
    </header>
  );
}
