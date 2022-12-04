/* eslint-disable react/no-children-prop */
import { Text } from "@chakra-ui/react";

type KcalLabelProps = {
  kcal: number;
  kcalText?: string;
};

export const KcalLabel = ({ kcal, kcalText }: KcalLabelProps) => {
  return (
    <Text>
      {kcal}&nbsp;{kcalText}
    </Text>
  );
};
