import { notFound } from 'next/navigation';

import { db } from '@/db';
import DesignConfigurator from './DesignConfigurator';

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: DesignPageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== 'string') {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;

  return (
    <DesignConfigurator
      imageDimensions={{ width, height }}
      configId={configuration.id}
      imageUrl={imageUrl}
    />
  );
};

export default Page;
