import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import style from "./HotTopics.module.css";

const HotTopics = () => {
  return (
    <Card className={style.card}>
      <CardHeader>
        <CardTitle className={style.card_title}>Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className={style.card_content}>
        WordCloud
        {/*<WordCloud formattedTopics={formattedTopics} />*/}
      </CardContent>
    </Card>
  );
};

export default HotTopics;
