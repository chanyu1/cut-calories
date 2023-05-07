import { Box, List } from '@chakra-ui/react';

import { VideoListItem } from './VideoListItem';

type VideoListProps = {
  videos: Array<object>;
  onSelectVideo: (selectedVideo: object) => void;
};

export const VideoList = ({ videos, onSelectVideo }: VideoListProps) => (
  <List w="100%">
    {videos.map((video: any) => (
      <Box p="6px 20px" key={video.etag}>
        <VideoListItem video={video} onSelectVideo={onSelectVideo} />
      </Box>
    ))}
  </List>
);
