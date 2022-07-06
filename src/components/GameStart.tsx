import React from "react";
import {
  Stack,
  Heading,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Button,
  StackItem,
  Spinner,
} from "@chakra-ui/react";
import { texts } from "../constants/texts";
import {
  MAZE_MAX_DIFFICULTY,
  MAZE_MAX_SIZE,
  MAZE_MIN_DIFFICULTY,
  MAZE_MIN_SIZE,
} from "../constants/game";

type Props = {
  mazeSizeValue: number;
  mazeDifficultyValue: number;
  onMazeSizeChange: (val: number) => void;
  onMazeDifficultyChange: (val: number) => void;
  onStartClick: () => void;
  isLoading?: boolean;
};

const GameStart = ({
  mazeSizeValue,
  mazeDifficultyValue,
  onMazeSizeChange,
  onMazeDifficultyChange,
  onStartClick,
  isLoading = false,
}: Props) => {
  const headingProps = {
    size: "lg",
  };

  return (
    <Stack spacing={3}>
      <Heading {...headingProps}>{texts.game.subtitle_1}</Heading>
      <Text>{texts.game.text_1}</Text>
      <Heading {...headingProps}>{texts.game.subtitle_2}</Heading>
      <Text>{texts.game.text_2}</Text>
      <Text>{texts.game.subtitle_3_1}</Text>
      <StackItem>
        <Slider
          mb={6}
          aria-label="slider-1"
          defaultValue={mazeSizeValue}
          min={MAZE_MIN_SIZE}
          max={MAZE_MAX_SIZE}
          step={1}
          onChange={(val) => onMazeSizeChange(val)}
        >
          <SliderMark
            value={mazeSizeValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="4"
            ml="-4"
            w="8"
          >
            {mazeSizeValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </StackItem>
      <Text>{texts.game.subtitle_3_2}</Text>
      <StackItem>
        <Slider
          mb={6}
          aria-label="slider-2"
          defaultValue={mazeDifficultyValue}
          min={MAZE_MIN_DIFFICULTY}
          max={MAZE_MAX_DIFFICULTY}
          step={1}
          onChange={(val) => onMazeDifficultyChange(val)}
        >
          <SliderMark
            value={mazeDifficultyValue}
            textAlign="center"
            bg="blue.500"
            color="white"
            mt="4"
            ml="-4"
            w="8"
          >
            {mazeDifficultyValue}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </StackItem>
      <Button onClick={onStartClick}>
        {isLoading ? <Spinner /> : texts.game.button}
      </Button>
    </Stack>
  );
};

export default React.memo(GameStart);
