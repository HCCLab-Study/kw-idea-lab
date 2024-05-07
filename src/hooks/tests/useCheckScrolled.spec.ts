import { useCheckScrolled } from '@/hooks/useCheckScrolled';
import { describe, expect, it } from 'vitest';
import { fireEvent, renderHook } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('useCheckScrolled', () => {
  it('최초에는 스크롤이 되지 않았을 때 scrolled는 false이다', () => {
    const { result } = renderHook(() => useCheckScrolled());
    expect(result.current.scrolled).toBe(false);
  });

  it('스크롤이 되면 scrolled는 true이다', () => {
    const { result } = renderHook(() => useCheckScrolled());
    // window.scrollY = 1;
    // window.dispatchEvent(new Event('scroll'));
    fireEvent.scroll(window, { target: { scrollY: 1 } });
    expect(result.current.scrolled).toBe(true);
  });

  it('스크롤을 통해 화면을 다시 최상단으로 올리면 scrolled는 false이다.', () => {
    const { result } = renderHook(() => useCheckScrolled());
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(result.current.scrolled).toBe(false);
  });
});
