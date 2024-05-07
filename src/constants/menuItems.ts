export interface MenuItem {
  name: string;
  href: string;
  value: string;
}

export const menuItems: MenuItem[] = [
  { name: 'Home', href: '/view/kw-idea/home', value: 'Home' },
  { name: 'People', href: '/view/kw-idea/people', value: 'People' },
  { name: 'Projects', href: '/view/kw-idea/projects', value: 'Projects' },
  {
    name: 'Publications',
    href: '/view/kw-idea/publications',
    value: 'Publications',
  },
  { name: 'Lectures', href: '/view/kw-idea/lectures', value: 'Lectures' },
  { name: 'club', href: '/view/kw-idea/club', value: '전공동아리' },
];
