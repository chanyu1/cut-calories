import { useState } from 'react';
import { Flex, Box, Heading, Tooltip } from '@chakra-ui/react';

type RecipeTitleProps = {
  title: string;
};

export const RecipeTitle = ({ title }: RecipeTitleProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <Flex top="0" w="100%" h="68px" p="12px 20px 16px" justify="center">
      <Tooltip label={title} isOpen={isTooltipOpen}>
        <Box w="800px" textAlign="center" overflow="hidden" whiteSpace="nowrap">
          <Heading
            overflow="hidden"
            textOverflow="ellipsis"
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
            onClick={() => setIsTooltipOpen(!isTooltipOpen)}
          >
            {title}
          </Heading>
        </Box>
      </Tooltip>
    </Flex>
  );
};
