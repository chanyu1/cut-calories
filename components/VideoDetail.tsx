import {
  Box,
  Input,
  Text,
  FormControl,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

type VideoDetailProps = {
  video: object;
};

export const VideoDetail = ({ video }: VideoDetailProps) => {
  console.log(1);

  return (
    <AspectRatio maxW="560px" ratio={1.5}>
      <iframe
        title="naruto"
        // src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        // src={`https://www.youtube.com/embed/${selectedVideo?.items[0].id.videoId}`}
        src={`https://www.youtube.com/embed/${video}`}
        // src={youtubeUrl}
        allowFullScreen
      />
    </AspectRatio>
  );
};
