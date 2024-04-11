import ItemLists from '@/components/article/ItemLists';
import React, { PropsWithChildren } from 'react';

type Props = {
  title: string;
};

export default function ArticleContainer({ children }: PropsWithChildren) {
  return <section className="w-[100%]">{children}</section>;
}
ArticleContainer.Header = Header;
ArticleContainer.ItemLists = ItemLists;

export function Header({ title }: Props) {
  return <h4 className="font-bold mb-4">{title}</h4>;
}
