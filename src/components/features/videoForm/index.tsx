import { Flex, HStack, Spacer } from "@chakra-ui/react";

import { BaseButton } from "components/parts/BaseButton";
import { KcalLabel } from "components/parts/KcalLabel";
import { SliderInput } from "components/parts/SliderInput";

type VideoFormProps = {
  minKcal: number;
  maxKcal: number;
  onChangeKcal: (kcal: Array<number>) => void;
  onSearchVideo: (minKcal: number, maxKcal: number) => void;
};

export const VideoForm = ({
  minKcal,
  maxKcal,
  onChangeKcal,
  onSearchVideo,
}: VideoFormProps) => (
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
        <KcalLabel kcal={minKcal} kcalText="Kcal&nbsp;&nbsp;~" />
        <KcalLabel kcal={maxKcal} kcalText="Kcal&nbsp;のレシピを検索します。" />
      </HStack>
      <Spacer />
      <SliderInput
        minKcal={minKcal}
        maxKcal={maxKcal}
        onChangeKcal={onChangeKcal}
      />
      <Spacer />
      <Flex justify="right">
        <BaseButton
          label="検&nbsp;&nbsp;&nbsp;索"
          onClick={() => onSearchVideo(minKcal, maxKcal)}
          bg="teal"
          colorScheme="#22A39F"
          color="beige"
          width="100px"
        />
      </Flex>
    </Flex>
  </Flex>
);
