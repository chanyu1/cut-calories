import { Text } from '@chakra-ui/react';

type KcalLabelProps = {
  kcal: number;
  kcalText: string;
};

export const KcalLabel = ({ kcal, kcalText }: KcalLabelProps) => (
  <Text>
    {kcal}&nbsp;{kcalText}
  </Text>
);
