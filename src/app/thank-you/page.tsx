'use client';

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

import { ThankYou } from '@/app/thank-you/ThankYou';

const ThankYouPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || '';

  if (!orderId || typeof orderId !== 'string') {
    return notFound();
  }

  return (
    <Suspense>
      <ThankYou orderId={orderId} />
    </Suspense>
  );
};

export default ThankYouPage;
