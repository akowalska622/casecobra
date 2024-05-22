import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
  SaveConfigArgs,
  saveConfig as _saveConfig,
} from '@/app/configure/design/actions';
import { useToast } from '@/components/ui/use-toast';

export const useSaveConfig = ({
  saveCroppedPicture,
  configId,
}: {
  saveCroppedPicture: () => Promise<void>;
  configId: string;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const { mutate: saveConfig } = useMutation({
    mutationKey: ['save-config'],
    mutationFn: async (args: SaveConfigArgs) => {
      await Promise.all([saveCroppedPicture(), _saveConfig(args)]);
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      });
    },
    onSuccess: () => {
      router.push(`/configure/preview?id=${configId}`);
    },
  });

  return { saveConfig };
};
