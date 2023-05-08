import _ from 'lodash';
import { Flex } from '@chakra-ui/react';

import { VideoDetail } from './VideoDetail';
import { VideoList } from './VideoList';
import { VideoContent } from 'types/data';

type VideoContentsProps = {
  selectedVideo: VideoContent;
  videos: VideoContent[];
  onSelectVideo: (selectedVideo: VideoContent) => void;
};

export const VideoContents = ({
  selectedVideo,
  videos,
  onSelectVideo,
}: VideoContentsProps) => (
  <Flex mb="170px" justify="center">
    <Flex w="100%" maxW="800px" flexDirection="column" gap="16px">
      <Flex
        justify="center"
        bg="black"
        sx={{
          position: 'sticky',
          top: '0',
        }}
      >
        <VideoDetail video={selectedVideo} />
      </Flex>
      <VideoList videos={videos} onSelectVideo={onSelectVideo} />
    </Flex>
  </Flex>
);
