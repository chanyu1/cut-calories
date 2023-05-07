import { useEffect, useState } from 'react';
import Head from 'next/head';

import { ContentArea } from 'components/features/contentArea';
import { SearchForm } from 'components/features/searchForm';
import { useRecipeVideos } from 'hooks/useRecipeVideos';

export default function Home() {
  const [minKcal, setMinKcal] = useState<number>(200);
  const [maxKcal, setMaxKcal] = useState<number>(500);
  // TODO: Type
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const { data, isLoading, error, fetchData } = useRecipeVideos(
    minKcal,
    maxKcal
  );

  useEffect(() => {
    data?.videoContents && setSelectedVideo(data?.videoContents[0]);
  }, [data?.videoContents]);

  const onClickSearch = (sliderMinKcal: number, sliderMaxKcal: number) => {
    fetchData(sliderMinKcal, sliderMaxKcal);
    sliderMinKcal !== minKcal && setMinKcal(sliderMinKcal);
    sliderMaxKcal !== maxKcal && setMaxKcal(sliderMaxKcal);
  };

  const onSelectVideo = (selectedVideo: any) => {
    return setSelectedVideo(selectedVideo);
  };

  if (error) return alert(`${error.name}: ${error.message}`);

  // TODO: Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute
  return (
    <>
      <Head>
        <title>カットカロリー</title>
      </Head>
      <ContentArea
        data={data}
        isLoading={isLoading}
        selectedVideo={selectedVideo}
        onSelectVideo={onSelectVideo}
      />
      <SearchForm
        minKcal={minKcal}
        maxKcal={maxKcal}
        onClickSearch={onClickSearch}
      />
    </>
  );
}
