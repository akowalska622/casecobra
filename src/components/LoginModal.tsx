import type { Dispatch, SetStateAction } from 'react';

import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import Image from 'next/image';

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className='absolute z-[9999999]'>
        <DialogHeader>
          <div className='relative mx-auto w-24 h-24 mb-2'>
            <Image
              src='/snake-1.png'
              alt='snake image'
              className='object-contain'
              fill
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
