"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { loadingTexts } from "./loadingText";

import style from "./Loader.module.css";

type Props = { isFinished: boolean };

const QuestionsLoader = ({ isFinished }: Props) => {
  const [progress, setProgress] = useState(10);
  const [loadingText, setLoadingText] = useState(loadingTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (isFinished) return 100;

        if (prev === 100) {
          return 0;
        }

        if (Math.random() < 0.1) {
          return prev + 2;
        }

        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isFinished]);

  return (
    <div className={style.progress_container}>
      <Progress value={progress} className="w-full mt-4" />
      <h2 className="mt-2 text-xl">{loadingText}</h2>
    </div>
  );
};

export default QuestionsLoader;
