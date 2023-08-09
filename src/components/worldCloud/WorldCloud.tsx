"use client";
import React from "react";
import D3WorldClound from "react-d3-cloud";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const WorldCloud = ({ formattedTopics }: Props) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <D3WorldClound
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        padding={10}
        rotate={0}
        fill={theme.theme == "dark" ? "white" : "black"}
        data={formattedTopics}
        onWordClick={(e, d) => {
          router.push("/trivia?topic=" + d.text);
        }}
      />
    </>
  );
};

export default WorldCloud;
