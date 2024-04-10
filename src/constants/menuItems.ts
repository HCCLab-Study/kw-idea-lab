export interface MenuItem {
  name: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { name: 'Home', href: '/home' },
  { name: 'People', href: '/people' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Lectures', href: '/lectures' },
  { name: '전공동아리', href: '/전공동아리' },
];
