import { Check, Star } from 'lucide-react';

type Props = {
  stars: 1 | 2 | 3 | 4 | 5;
  imgSrc: string;
  name: string;
  verifiedPurchase: boolean;
  children: React.ReactNode;
};

export const UserTestimonial = ({
  stars,
  imgSrc,
  name,
  verifiedPurchase,
  children,
}: Props) => (
  <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
    <div className='flex gap-0.5 mb-2'>
      {Array.from({ length: stars }).map((_, index) => (
        <Star key={index} className='h-5 w-5 text-green-600 fill-green-600' />
      ))}
    </div>
    <div className='text-lg leading-8'>{children}</div>
    <div className='flex gap-4 mt-2'>
      <img
        className='rounded-full h-12 w-12 object-cover'
        src={imgSrc}
        alt='user image'
      />
      <div className='flex flex-col'>
        <p className='font-semibold'>{name}</p>
        {verifiedPurchase ? (
          <div className='flex gap-1.5 items-center text-zinc-600'>
            <Check className='h-4 w-4 stroke-[3px] text-green-600' />
            <p className='text-sm'>Verified Purchase</p>
          </div>
        ) : null}
      </div>
    </div>
  </div>
);
