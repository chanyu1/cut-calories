import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

type SliderInputProps = {
  minKcal: number;
  maxKcal: number;
  onChangeKcal: (kcal: Array<number>) => void;
};

export const SliderInput = ({
  minKcal,
  maxKcal,
  onChangeKcal,
}: SliderInputProps) => (
  <RangeSlider
    // eslint-disable-next-line jsx-a11y/aria-proptypes
    aria-label={["min", "max"]}
    colorScheme="pink"
    defaultValue={[minKcal, maxKcal]}
    step={10}
    min={50}
    max={1800}
    onChange={onChangeKcal}
  >
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);
