import { Flex, HStack, Spacer } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";

import { BaseButton } from "./parts/BaseButton";
import { KcalLabel } from "./parts/KcalLabel";
import { SliderInput } from "./parts/SliderInput";

type VideoFormProps = {
  minKcal: number;
  maxKcal: number;
  onChangeKcal: any;
  onSearchVideo: () => void;
};

export const VideoForm = ({
  minKcal,
  maxKcal,
  onChangeKcal,
  onSearchVideo,
}: VideoFormProps) => {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  return (
    <Flex
      bg="black"
      position="fixed"
      bottom="0"
      w="100%"
      h="156px"
      zIndex="docked"
      justifyContent="center"
      borderTop="2px solid teal"
    >
      <Flex
        w="100%"
        maxW="800px"
        h="100%"
        p="14px 20px 28px"
        flexDirection="column"
        justifyContent="center"
      >
        <HStack>
          <KcalLabel kcal={minKcal} kcalText="Kcal&nbsp;&nbsp;~" />
          <KcalLabel kcal={maxKcal} kcalText="Kcal のレシピを検索します。" />
        </HStack>
        <Spacer />
        <SliderInput
          minKcal={minKcal}
          maxKcal={maxKcal}
          onChangeKcal={onChangeKcal}
        />
        <Spacer />
        <Flex justifyContent="right">
          <BaseButton
            label="検&nbsp;&nbsp;&nbsp;索"
            onClick={onSearchVideo}
            colorScheme="teal"
            width="100px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
