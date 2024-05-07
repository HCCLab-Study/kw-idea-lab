import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Action = {
  openSideMenu: () => void;
  closeSideMenu: () => void;
  toggleSideMenu: () => void;
};

export const useSideMenuStore = create<State & Action>(set => ({
  isOpen: false,
  openSideMenu: () => set({ isOpen: true }),
  closeSideMenu: () => set({ isOpen: false }),
  toggleSideMenu: () => set(state => ({ isOpen: !state.isOpen })),
}));
