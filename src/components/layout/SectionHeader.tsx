'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  headerTitle: string;
};

export function SectionHeader({ headerTitle }: Props) {
  const isOverTablet = useMediaQuery('(min-width:768px)');
  console.log(isOverTablet);
  return (
    <header
      className={`${isOverTablet ? ' px-16' : 'px-8'} flex justify-center bg-[#5A8BB6] py-10`}>
      <div className={`${isOverTablet ? 'w-[80%]' : 'w-[100%]'}`}>
        <h2 className={`text-[30px] text-white`}>{headerTitle}</h2>
      </div>
    </header>
  );
}
