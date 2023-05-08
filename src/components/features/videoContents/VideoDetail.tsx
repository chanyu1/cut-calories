import { AspectRatio } from '@chakra-ui/react';

import { VideoContent } from 'types/data';

type VideoDetailProps = {
  video: VideoContent;
};

export const VideoDetail = ({ video }: VideoDetailProps) => (
  <AspectRatio w="100%" maxW="500px" ratio={1.5}>
    <iframe
      title={video?.snippet?.title}
      src={`https://www.youtube-nocookie.com/embed/${video?.id?.videoId}`}
      allowFullScreen
    />
  </AspectRatio>
);
