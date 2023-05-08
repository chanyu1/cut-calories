import { Flex, Heading } from '@chakra-ui/react';

import { RecipeTitle } from 'components/features/recipeTitle';
import { VideoContents } from 'components/features/videoContents';
import { VideoContent, Data } from 'types/data';

type ContentAreaProps = {
  data: Data;
  isLoading: boolean;
  selectedVideo: VideoContent;
  onSelectVideo: (selectedVideo: VideoContent) => void;
};

export const ContentArea = ({
  data,
  isLoading,
  selectedVideo,
  onSelectVideo,
}: ContentAreaProps) => {
  if (!data || isLoading || !selectedVideo) {
    return (
      <Flex h="100vh" justify="center" alignItems="center">
        <Heading size="lg" pb="120px">
          Loading...
        </Heading>
      </Flex>
    );
  }

  return (
    <>
      <RecipeTitle title={data.recipeTitle} />
      <VideoContents
        selectedVideo={selectedVideo}
        videos={data.videoContents}
        onSelectVideo={onSelectVideo}
      />
    </>
  );
};
