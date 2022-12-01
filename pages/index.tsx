import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Input,
  Text,
  FormControl,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

import { VideoDetail } from "../components/VideoDetail";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const minKcalRef = useRef<HTMLInputElement>(null);
  const maxKcalRef = useRef<HTMLInputElement>(null);
  const [videos, setVideos] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitFormHandler = async (event: any) => {
    event.preventDefault();

    // console.log(1, minKcalRef?.current?.value);
    // console.log(1, maxKcalRef?.current?.value);

    // const enteredEmail = emailInput.current.value;
    // const enteredFeedback = feedBackInput.current.value;

    // {email : "test@test.com", text: 'Some feedback text'};
    // handler

    // const reqBody = {
    //   email: "enteredEmail",
    //   text: "enteredFeedback",
    // };

    // fetch("/api/hello", {
    //   method: "GET",
    //   // body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(2, data));

    const kcalUrl = `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minKcalRef?.current?.value}&maxCalories=${maxKcalRef?.current?.value}&number=100&random=true&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`;
    console.log("kcalUrl", kcalUrl);

    await fetch(kcalUrl, {
      method: "GET",
      // body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((videos) => {
        console.log(11, videos);
        console.log(22, videos?.[0]["title"]);
        console.log(
          23,
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
            process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
          }&type=video&q=${videos ? videos?.[0]["title"] : "naruto"}`
        );
        return fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
            process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
          }&type=video&q=${videos ? videos?.[7]["title"] : "naruto"}`
        );
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(33, result);
        return setSelectedVideo(result);
      });

    // console.log("123", videos);

    // const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
    //   process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    // }&type=video&q=${videos ? videos?.[0]["title"] : "naruto"}`;
    // console.log("youtubeUrl", youtubeUrl);

    // await fetch(youtubeUrl, {
    //   method: "GET",
    //   // body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setSelectedVideo(data));

    // console.log("12345", selectedVideo);
  };

  // console.log("videos", videos && videos?.[0]["title"]);

  // const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
  //   process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  // }&type=video&q=${videos ? videos?.[0]["title"] : "naruto"}`;

  // // const videoSearch = (key, search, )

  // console.log("youtubeUrl", youtubeUrl);
  // // Cut Calories

  return (
    <Box>
      {/* {console.log(selectedVideo?.items[0].id.videoId)} */}
      <Head>
        <title>カロリーカット</title>
      </Head>
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <Text>
        *女性は一日800~1200カロリー、男性は1200~1400カロリーがダイエットに効果的です。*
      </Text>
      <form onSubmit={submitFormHandler}>
        <FormControl onSubmit={submitFormHandler}>
          <label htmlFor="year">Year</label>
          <Input
            type="number"
            min="1"
            max="3000"
            id="min"
            placeholder="min kcal"
            ref={minKcalRef}
          />
          ~
          <Input
            type="number"
            min="1"
            max="3000"
            id="max"
            placeholder="max kcal"
            ref={maxKcalRef}
          />
          <Button isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
      {/* {console.log(data1[0])} */}
      {/* // <Link href={youtubeUrl}>aaaa</Link> */}
      {/* <Box>{data1[0].title}</Box> */}
      {/* <footer className={styles.footer}></footer> */}
    </Box>
  );
}
