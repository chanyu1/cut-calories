import { useRef, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  const minKcalRef = useRef();
  const maxKcalRef = useRef();
  const [data1, setData1] = useState([]);

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
      .then((data) => {
        setData1(data);
        return console.log(data);
      });
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&type=video&q=ajax`;

  console.log(url);
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
        <input type="number" min="1" max="3000" id="min" ref={minKcalRef} />
        <input type="number" min="1" max="3000" id="max" ref={maxKcalRef} />
        <button type="submit">Submit</button>
      </form>
      {console.log(data1[0])}
      <Link href={url}>aaaa</Link>
      {/* <Box>{data1[0].title}</Box> */}
      {/* <footer className={styles.footer}></footer> */}
    </Box>
  );
}
