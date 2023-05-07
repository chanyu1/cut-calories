import { Flex, Heading } from '@chakra-ui/react';

import { RecipeTitle } from 'components/features/recipeTitle';
import { VideoContents } from 'components/features/videoContents';

// TODO: Type
type ContentAreaProps = {
  data: any;
  isLoading: boolean;
  selectedVideo: any;
  onSelectVideo: any;
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
