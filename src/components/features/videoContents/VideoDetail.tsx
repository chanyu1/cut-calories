import { AspectRatio } from '@chakra-ui/react';

type VideoDetailProps = {
  video: any;
};

export const VideoDetail = ({ video }: VideoDetailProps) => (
  <AspectRatio w="100%" maxW="500px" ratio={1.5}>
    <iframe
      title={video.snippet.title}
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
      allowFullScreen
    />
  </AspectRatio>
);
