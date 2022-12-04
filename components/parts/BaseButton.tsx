import { Button } from "@chakra-ui/react";

type BaseButtonProps = {
  label: string;
  onClick: () => void;
  color?: string;
  colorScheme?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  // onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const BaseButton = ({
  label,
  onClick,
  color,
  colorScheme,
  width,
  height,
  isDisabled = false,
}: BaseButtonProps) => (
  <Button
    onClick={onClick}
    color={color}
    colorScheme={colorScheme}
    width={width}
    height={height}
    isDisabled={isDisabled}
  >
    {label}
  </Button>
);
