'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  title: string;
  textColor: string;
};

export default function Title({ title, textColor }: Props) {
  const isOverTablet = useMediaQuery('(min-width: 768px)');
  console.log(isOverTablet);
  return (
    <div className={`flex-1 px-7 ${isOverTablet ? 'max-w-[73%]' : ''}`}>
      <h1
        className={`title text-[68px] break-words relative text-center ${textColor} ${isOverTablet ? '' : 'text-[9vw]'}`}>
        {title}
      </h1>
    </div>
  );
}
