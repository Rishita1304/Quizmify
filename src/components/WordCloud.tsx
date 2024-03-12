"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const data = [
    {
        text: "Hey",
        value: 3
    },
    {
        text: "Hello",
        value: 2
    },
    {
        text: "Hii",
        value: 4
    },
    {
        text: "Whatup",
        value: 5
    },
    {
        text: "Friend",
        value: 6
    },
    {
        text: "User",
        value: 4
    },
    {
        text: "Typing",
        value: 2
    },
    {
        text: "Great",
        value: 4
    },
    {
        text: "Talking",
        value: 3
    },
    {
        text: "Texting",
        value: 6
    },
]

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        data={data}
        height={200}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
};

export default WordCloud;