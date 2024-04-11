import Title from '@/components/introduction/Title';
import React, { PropsWithChildren } from 'react';

type Props = {
  title: string;
  textColor?: string;
};

export default function Introduction({
  title,
  textColor = 'text-black',
  children,
}: PropsWithChildren<Props>) {
  return (
    <section className="min-h-[340px] py-14 relative top-0 w-[100%]">
      {children}
      <div>
        <div className="py-6 px-6 relative flex justify-center">
          <Title title={title} textColor={textColor} />
        </div>
      </div>
    </section>
  );
}
