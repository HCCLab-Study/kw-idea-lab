import React from 'react';

type Props = {
  title: string;
};

export default function Introduction({ title }: Props) {
  return (
    <section className="min-h-[340px] py-14 absolute top-0">
      {/* <div></div> 아마 백그라운드 이미지?*/}
      <div>
        <div className="py-6 px-6 relative">
          <div className="px-7">
            <h1 className="title text-[68px] break-words relative">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
