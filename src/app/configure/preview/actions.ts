'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

import { db } from '@/db';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/product';

export const createCheckoutSession = async ({
  configId,
}: {
  configId: string;
}) => {
  const configuration = await db.configuration.findUnique({
    where: {
      id: configId,
    },
  });

  if (!configuration) {
    throw new Error('Configuration not found');
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('You need to be logged in');
  }

  const { finish, material } = configuration;

  const totalPrice =
    BASE_PRICE +
    PRODUCT_PRICES.material[material!] +
    PRODUCT_PRICES.finish[finish!];
};
