import { Box, List } from "@chakra-ui/react";

import { VideoListItem } from "./VideoListItem";

type VideoListProps = {
  videos: Array<object>;
  onSelectedVideo: (selectedVideo: object) => void;
};

export const VideoList = ({ videos, onSelectedVideo }: VideoListProps) => (
  <List w="100%">
    {videos.map((video: any) => (
      <Box p="6px 20px" key={video.etag}>
        <VideoListItem video={video} onSelectedVideo={onSelectedVideo} />
      </Box>
    ))}
  </List>
);
