import { OrderStatus } from '@prisma/client';
import { Record } from '@prisma/client/runtime/library';

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

export const BASE_PRICE = 14_00;

export const SHIPMENT_STATUS_LABEL: Record<keyof typeof OrderStatus, string> = {
  awaiting_shipment: 'Awaiting shipment',
  shipped: 'Shipped',
  fulfilled: 'Fulfilled',
};
