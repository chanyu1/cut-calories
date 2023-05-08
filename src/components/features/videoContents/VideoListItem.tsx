import { Img, Flex, ListItem } from '@chakra-ui/react';

import { VideoContent } from 'types/data';

type VideoListItemProps = {
  video: VideoContent;
  onSelectVideo: (selectedVideo: VideoContent) => void;
};

export const VideoListItem = ({ video, onSelectVideo }: VideoListItemProps) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <ListItem
      p="12px"
      bg="grey"
      borderRadius="12px"
      cursor="pointer"
      onClick={() => onSelectVideo(video)}
    >
      <Flex>
        <Img src={imageUrl} h="100%" />
        <Flex ml="12px" alignItems="center">
          <p dangerouslySetInnerHTML={{ __html: video.snippet.title }} />
        </Flex>
      </Flex>
    </ListItem>
  );
};
