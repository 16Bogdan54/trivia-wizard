"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";

import style from "./QuizMe.module.css";

const QuizMe = () => {
  const router = useRouter();
  return (
    <Card
      className={style.card}
      onClick={() => {
        router.push("/trivia");
      }}
    >
      <CardHeader className={style.card_header}>
        <CardTitle className={style.card_title}>Quiz me!</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className={style.card_content}>
          Challenge yourself to a quiz with a topic of your choice.
        </p>
      </CardContent>
    </Card>
  );
};

export default QuizMe;
