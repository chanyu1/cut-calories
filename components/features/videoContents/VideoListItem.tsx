import { Img, Flex, ListItem } from "@chakra-ui/react";

type VideoListItemProps = {
  video: any;
  onSelectedVideo: (selectedVideo: object) => void;
};

export const VideoListItem = ({
  video,
  onSelectedVideo,
}: VideoListItemProps) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <ListItem
      p="12px"
      bg="grey"
      borderRadius="12px"
      cursor="pointer"
      onClick={() => onSelectedVideo(video)}
    >
      <Flex>
        <Img src={imageUrl} h="100%" />
        <Flex ml="12px" alignItems="center">
          {video.snippet.title}
        </Flex>
      </Flex>
    </ListItem>
  );
};
