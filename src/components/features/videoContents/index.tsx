import _ from "lodash";
import { Heading, Flex } from "@chakra-ui/react";

import { VideoDetail } from "./VideoDetail";
import { VideoList } from "./VideoList";

type VideoContentsProps = {
  selectedVideo: object;
  videos: Array<object>;
  onSelectVideo: (selectedVideo: object) => void;
};

export const VideoContents = ({
  selectedVideo,
  videos,
  onSelectVideo,
}: VideoContentsProps) => {
  if (_.isEmpty(videos)) {
    return (
      <Flex h="60vh" justifyContent="center" alignItems="center">
        <Heading size="lg">Loading...</Heading>
      </Flex>
    );
  }

  return (
    <Flex mb="170px" justifyContent="center">
      <Flex w="100%" maxW="800px" flexDirection="column" gap="16px">
        <Flex
          justifyContent="center"
          bg="black"
          sx={{
            position: "sticky",
            top: "0",
          }}
        >
          <VideoDetail video={selectedVideo} />
        </Flex>
        <VideoList videos={videos} onSelectVideo={onSelectVideo} />
      </Flex>
    </Flex>
  );
};
