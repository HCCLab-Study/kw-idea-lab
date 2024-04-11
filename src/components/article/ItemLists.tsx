import React from 'react';

type Props = {
  items: string[];
};

export default function ItemLists({ items }: Props) {
  return (
    <div>
      <ul className="flex flex-col gap-y-1">
        {items.map((item, index) => (
          <li key={index} className="flex text-sm gap-x-1">
            <span className="text-[8px]">◾</span>{' '}
            <p className="leading-6">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
