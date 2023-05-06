import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

type SliderInputProps = {
  sliderMinKcal: number;
  sliderMaxKcal: number;
  onChangeSliderKcal: (kcal: Array<number>) => void;
};

export const SliderInput = ({
  sliderMinKcal,
  sliderMaxKcal,
  onChangeSliderKcal,
}: SliderInputProps) => (
  <RangeSlider
    // eslint-disable-next-line jsx-a11y/aria-proptypes
    aria-label={['min', 'max']}
    colorScheme="pink"
    defaultValue={[sliderMinKcal, sliderMaxKcal]}
    step={10}
    min={100}
    max={1200}
    onChange={onChangeSliderKcal}
    minStepsBetweenThumbs={10}
  >
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);
