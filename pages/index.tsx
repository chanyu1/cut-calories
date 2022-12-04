import { useEffect, useState } from "react";
import Head from "next/head";

import { VideoTitle } from "../components/VideoTitle";
import { VideoContents } from "../components/VideoContents";
import { VideoForm } from "../components/VideoForm";

export default function Home() {
  const [minKcal, setMinKcal] = useState(200);
  const [maxKcal, setMaxKcal] = useState(500);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    onSearchVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeKcal = (kcal: any) => {
    kcal[0] !== minKcal && setMinKcal(kcal[0]);
    kcal[1] !== maxKcal && setMaxKcal(kcal[1]);
  };

  const onSearchVideo = async () => {
    const recipesUrl = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minKcal}&maxCalories=${maxKcal}&number=1&random=true&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`;

    await fetch(recipesUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      // .then((recipes) => {
      //   setSearchedRecipes(recipes);
      //   return fetch(
      //     `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=${recipes[0]["title"]}&maxResults=1`
      //   );
      // })
      // .then((response) => response.json())
      // .then((videos) => {
      //   console.log(45, videos);
      //   setVideos(videos);
      //   setSelectedVideo(videos.items[0]);
      // })
      .then((recipes) => {
        setSearchedRecipes(recipes);
        const vid = {
          items: [
            {
              title: "asdgbbb",
            },
          ],
        };
        // console.log(vid.items[0]);
        setVideos([]);
        setSelectedVideo(vid);
      })
      .catch();
  };

  return (
    <>
      <Head>
        <title>カットカロリー</title>
      </Head>
      <VideoTitle title={"asdg"} />
      <VideoContents
        videos={videos}
        selectedVideo={selectedVideo}
        onVideoSelect={(selectedVideo: any) => setSelectedVideo(selectedVideo)}
      />
      <VideoForm
        minKcal={minKcal}
        maxKcal={maxKcal}
        onChangeKcal={onChangeKcal}
        onSearchVideo={onSearchVideo}
      />
    </>
  );
}
