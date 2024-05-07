import { Check } from 'lucide-react';

export const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className='flex gap-1.5 items-center text-left'>
    <Check className='h-5 w-5 shrink-0 text-green-600' />
    {children}
  </li>
);
