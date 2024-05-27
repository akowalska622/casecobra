'use client';

import { Suspense } from 'react';

import { ThankYou } from '@/app/thank-you/ThankYou';

const ThankYouPage = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default ThankYouPage;
