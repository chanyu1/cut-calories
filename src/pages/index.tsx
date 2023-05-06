import { useState } from 'react';
import Head from 'next/head';

import { RecipeTitle } from 'components/features/recipeTitle';
import { VideoContents } from 'components/features/videoContents';
import { VideoForm } from 'components/features/videoForm';
import { useRecipeVideos } from 'hooks/useRecipeVideos';

export default function Home() {
  const [minKcal, setMinKcal] = useState<number>(200);
  const [maxKcal, setMaxKcal] = useState<number>(500);
  const [selectedVideo, setSelectedVideo] = useState<object>({});

  // TODO: setSelectedVideo(videos[0])
  const { recipeTitle, videos, fetchData } = useRecipeVideos(minKcal, maxKcal);
  // console.log(recipeTitle);

  const onClickSearch = (sliderMinKcal: number, sliderMaxKcal: number) => {
    fetchData(sliderMinKcal, sliderMaxKcal);
    sliderMinKcal !== minKcal && setMinKcal(sliderMinKcal);
    sliderMaxKcal !== maxKcal && setMaxKcal(sliderMaxKcal);
  };

  // TODO: rendering check
  console.log('render home');
  return (
    <>
      <Head>
        <title>カットカロリー</title>
      </Head>
      <RecipeTitle title={recipeTitle} />
      <VideoContents
        selectedVideo={selectedVideo}
        videos={videos}
        onSelectVideo={(selectedVideo: object) =>
          setSelectedVideo(selectedVideo)
        }
      />
      <VideoForm
        minKcal={minKcal}
        maxKcal={maxKcal}
        onClickSearch={onClickSearch}
      />
    </>
  );
}
