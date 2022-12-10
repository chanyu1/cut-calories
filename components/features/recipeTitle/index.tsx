import { Flex, Box, Heading } from "@chakra-ui/react";

type RecipeTitleProps = {
  title: string;
};

export const RecipeTitle = ({ title }: RecipeTitleProps) => (
  <Flex top="0" w="100%" p="12px 20px 16px" justifyContent="center">
    <Box w="800px" textAlign="center">
      <Heading>{title}</Heading>
    </Box>
  </Flex>
);
