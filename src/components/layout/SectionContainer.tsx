import React, { PropsWithChildren } from 'react';

export default function SectionContainer({ children }: PropsWithChildren) {
  return <section>{children}</section>;
}
