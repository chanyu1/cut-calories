import { Box, List } from '@chakra-ui/react';

import { VideoListItem } from './VideoListItem';
import { VideoContent } from 'types/data';

type VideoListProps = {
  videos: VideoContent[];
  onSelectVideo: (selectedVideo: VideoContent) => void;
};

export const VideoList = ({ videos, onSelectVideo }: VideoListProps) => (
  <List w="100%">
    {videos?.map((video: VideoContent) => (
      <Box p="6px 20px" key={video.etag}>
        <VideoListItem video={video} onSelectVideo={onSelectVideo} />
      </Box>
    ))}
  </List>
);
