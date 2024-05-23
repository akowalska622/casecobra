'use client';
import { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';
import { Configuration } from '@prisma/client';

import { Phone } from '@/components/Phone';
import {
  COLORS,
  MODELS,
  MATERIALS,
  FINISHES,
} from '@/validators/option-validator';
import { cn, formatPrice } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/product';
import { Button } from '@/components/ui/button';

interface DesignPreviewProps {
  configuration: Configuration;
}

const DesignPreview = ({ configuration }: DesignPreviewProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => setShowConfetti(true), []);

  const { color, model, finish, material, croppedImageUrl } = configuration;
  const twColor = COLORS.find(
    (supportedColor) => supportedColor.value === color
  )?.tw;
  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!;

  const totalPrice =
    BASE_PRICE +
    PRODUCT_PRICES.material[material!] +
    PRODUCT_PRICES.finish[finish!];

  const selectedFinish = FINISHES.options.find(
    ({ value }) => value === finish!
  );
  const selectedMaterial = MATERIALS.options.find(
    ({ value }) => value === material!
  );

  const finishLabel = selectedFinish?.label || 'Textured Finish';
  const finishPrice = selectedFinish?.price || 0;
  const materialLabel = selectedMaterial?.label || 'Soft Polycarbonate';
  const materialPrice = selectedMaterial?.price || 0;

  return (
    <>
      <div
        aria-hidden='true'
        className='pointer-events-none select-none absolute inset-10 overflow-hidden flex justify-center'
      >
        <Confetti
          active={showConfetti}
          config={{
            elementCount: 350,
            spread: 150,
            duration: 4000,
            startVelocity: 40,
          }}
        />
      </div>
      <div className='mt-10 mb-10 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
        <div className='md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2'>
          <Phone imgSrc={croppedImageUrl!} className={cn(`bg-${twColor}`)} />
        </div>
        <div className='mt-6 sm:col-span-9 sm:mt-0 md:row-end-1'>
          <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
            Your {modelLabel} Case
          </h3>
          <div className='mt-3 flex items-center gap-1.5 text-base'>
            <Check className='h-4 w-4 text-green-500' />
            In stock and ready to ship
          </div>
        </div>
        <div className='sm:col-span-12 md:col-span-9 text-base'>
          <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
            <div>
              <p className='font-medium text-zinc-950'>Highlights</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 year print warranty</li>
              </ol>
            </div>
            <div>
              <p className='font-medium text-zinc-950'>Materials</p>
              <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                <li>High-quality, durable material</li>
                <li>Scratch- and fingerprint resistant coating</li>
              </ol>
            </div>
          </div>
          <div className='mt-8'>
            <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
              <div className='flow-root text-sm'>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>Base price</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>{finishLabel}</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(finishPrice / 100)}
                  </p>
                </div>
                <div className='flex items-center justify-between py-1 mt-2'>
                  <p className='text-gray-600'>{materialLabel} material</p>
                  <p className='font-medium text-gray-900'>
                    {formatPrice(materialPrice / 100)}
                  </p>
                </div>
                <div className='my-2 h-px bg-gray-200' />
                <div className='flex items-center justify-between py-2'>
                  <p className='font-semibold text-gray-900'>Order total</p>
                  <p className='font-semibold text-gray-900'>
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-8 flex justify-end pb-12'>
              <Button className='px-4 sm:px-6 lg:px-8'>
                Check out <ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPreview;