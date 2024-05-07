import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  className?: string;
}

export const Phone = ({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        className='pointerevents-none z-50 select-none'
        alt='phone case image'
      />
      <div className='absolute -z-10 inset-0'>
        <img
          src={imgSrc}
          className='object-cover'
          alt='phone case filling image'
        />
      </div>
    </div>
  );
};
