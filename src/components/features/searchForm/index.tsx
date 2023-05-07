import { useState } from 'react';
import { Flex, HStack, Spacer } from '@chakra-ui/react';

import { BaseButton } from 'components/parts/BaseButton';
import { KcalLabel } from 'components/parts/KcalLabel';
import { SliderInput } from 'components/parts/SliderInput';

type SearchFormProps = {
  minKcal: number;
  maxKcal: number;
  onClickSearch: (sliderMinKcal: number, sliderMaxKcal: number) => void;
};

export const SearchForm = ({
  minKcal,
  maxKcal,
  onClickSearch,
}: SearchFormProps) => {
  const [sliderMinKcal, setSliderMinKcal] = useState<number>(minKcal);
  const [sliderMaxKcal, setSliderMaxKcal] = useState<number>(maxKcal);

  const onChangeSliderKcal = (kcal: Array<number>) => {
    kcal[0] !== sliderMinKcal && setSliderMinKcal(kcal[0]);
    kcal[1] !== sliderMaxKcal && setSliderMaxKcal(kcal[1]);
  };

  return (
    <Flex
      bg="black"
      position="fixed"
      bottom="0"
      w="100%"
      h="150px"
      zIndex="docked"
      justify="center"
      borderTop="2px solid"
      borderColor="teal"
    >
      <Flex
        w="100%"
        maxW="800px"
        h="100%"
        p="20px"
        flexDirection="column"
        justify="center"
      >
        <HStack>
          <KcalLabel kcal={sliderMinKcal} kcalText="Kcal&nbsp;&nbsp;~" />
          <KcalLabel
            kcal={sliderMaxKcal}
            kcalText="Kcal&nbsp;のレシピを検索します。"
          />
        </HStack>
        <Spacer />
        <SliderInput
          sliderMinKcal={sliderMinKcal}
          sliderMaxKcal={sliderMaxKcal}
          onChangeSliderKcal={onChangeSliderKcal}
        />
        <Spacer />
        <Flex justify="right">
          <BaseButton
            label="検&nbsp;&nbsp;&nbsp;索"
            onClick={() => onClickSearch(sliderMinKcal, sliderMaxKcal)}
            bg="teal"
            colorScheme="#22A39F"
            color="beige"
            width="100px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
