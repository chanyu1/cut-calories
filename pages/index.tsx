import { useEffect, useState, useRef } from "react";
import Head from "next/head";

import { RecipeTitle } from "../components/features/recipeTitle";
import { VideoContents } from "../components/features/videoContents";
import { VideoForm } from "../components/features/videoForm";

export default function Home() {
  const [minKcal, setMinKcal] = useState(200);
  const [maxKcal, setMaxKcal] = useState(500);
  const [recipeTitle, setRecipeTitle] = useState("");
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    onSearchVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeKcal = (kcal: Array<number>) => {
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
      .then((recipe) => {
        setRecipeTitle(recipe[0].title);
        return fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=${recipe[0].title}&maxResults=2`
        );
      })
      .then((response) => response.json())
      .then((videos) => {
        setSelectedVideo(videos.items[0]);
        setVideos(videos.items);
      })
      .catch((error) => {
        alert(`${error.name}: ${error.message}`);
      });
  };

  return (
    <>
      <Head>
        <title>カットカロリー</title>
      </Head>
      <RecipeTitle title={recipeTitle} />
      <VideoContents
        selectedVideo={selectedVideo}
        videos={videos}
        onSelectedVideo={(selectedVideo: object) =>
          setSelectedVideo(selectedVideo)
        }
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
