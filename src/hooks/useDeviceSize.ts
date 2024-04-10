import { useMediaQuery } from './useMediaQuery';

export function useDeviceSize() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
  const isMobile = useMediaQuery('(max-width:767px)');

  return { isDesktop, isTablet, isMobile };
}

export function useHeaderSize() {
  const showSix = useMediaQuery('(min-width: 880px)');
  const showFive = useMediaQuery('(min-width:874px) and (max-width:879px)');
  const showFour = useMediaQuery('(min-width:779px) and (max-width:873px)');
  const showThree = useMediaQuery('(min-width:768px) and (max-width:779px)');

  const showHamburgerMenu = useMediaQuery('(max-width:767px)');
  let showNumber = 6;
  if (showSix) showNumber = 6;
  if (showFive) showNumber = 5;
  if (showFour) showNumber = 4;
  if (showThree) showNumber = 3;
  if (showHamburgerMenu) showNumber = 0;

  const results = {
    isShowHamburgerMenu: showHamburgerMenu,
    showNumber: showNumber,
  };

  return results;
}
