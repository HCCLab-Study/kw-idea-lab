'use client';

import { useHeaderSize } from '@/hooks/useDeviceSize';
import { useState } from 'react';
import Hamburger from 'hamburger-react';

export default function HamburgerIcon() {
  const { isShowHamburgerMenu } = useHeaderSize();
  const [isOpen, setIsOpen] = useState(false);

  if (!isShowHamburgerMenu) return null;

  return (
    <div
      className="w-12 h-12 flex justify-center items-center cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}>
      <Hamburger size={24} />
    </div>
  );
}
