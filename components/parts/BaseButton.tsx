import { Button } from "@chakra-ui/react";

type BaseButtonProps = {
  label: string;
  onClick: () => void;
  bg?: string;
  colorScheme?: string;
  color?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
};

export const BaseButton = ({
  label,
  onClick,
  bg,
  colorScheme,
  color,
  width,
  height,
  isDisabled = false,
}: BaseButtonProps) => (
  <Button
    onClick={onClick}
    bg={bg}
    colorScheme={colorScheme}
    color={color}
    width={width}
    height={height}
    isDisabled={isDisabled}
  >
    {label}
  </Button>
);
