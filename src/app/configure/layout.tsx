import { ReactNode } from 'react';

import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import { Steps } from '@/components/Steps';

const ConfigureLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col min-h-[100vh-3.5rem-1px]'>
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default ConfigureLayout;
