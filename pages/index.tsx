import { useRef, useState } from "react";

import Head from "next/head";
import { Box, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const minKcalRef = useRef();
  const maxKcalRef = useRef();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  function submitFormHandler(event: any) {
    event.preventDefault();

    console.log(1, minKcalRef.current.value);
    console.log(1, maxKcalRef.current.value);
    // console.log(process.env.NEXT_PUBLIC_RECIPES_API_KEY);
    // console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY);

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

    fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?minCalories=200&maxCalories=500&apiKey=${process.env.NEXT_PUBLIC_RECIPES_API_KEY}`,
      {
        method: "GET",
        // body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }

  const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=blackpink`;

  // const videoSearch = (key, search, )

  console.log(youtubeUrl);
  // Cut Calories

  return (
    <Box>
      <Head>
        <title>カロリーカット</title>
      </Head>
      <Text>
        *女性は一日800~1200カロリー、男性は1200~1400カロリーがダイエットに効果的です。*
      </Text>
      <form onSubmit={submitFormHandler}>
        {/* <InputEvent /> */}
        {/* <label htmlFor="year">Year</label> */}
        <Input />
        <input type="number" min="1" max="3000" id="min" ref={minKcalRef} />
        <input type="number" min="1" max="3000" id="max" ref={maxKcalRef} />
        <button type="submit">Submit</button>
      </form>
      {/* {console.log(data1[0])} */}
      <Link href={youtubeUrl}>aaaa</Link>
      {/* <Box>{data1[0].title}</Box> */}
      {/* <footer className={styles.footer}></footer> */}
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        // src="https://www.youtube.com/embed/M7lc1UVf-VE"
        src="https://www.youtube.com/embed/gQlMMD8auMs"
        frameBorder="0"
        allowFullScreen={true}
      />
    </Box>
  );
}
