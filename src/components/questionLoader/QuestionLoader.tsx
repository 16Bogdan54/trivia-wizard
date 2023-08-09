import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

import style from "./Loader.module.css";
import { useLoader } from "@/hooks/useLoader";

type Props = { isFinished: boolean };

const loadingTexts = [
  "Generating questions...",
  "Unleashing the power of curiosity...",
  "Diving deep into the ocean of questions..",
  "Harnessing the collective knowledge of the cosmos...",
  "Igniting the flame of wonder and exploration...",
];

const QuestionLoader = ({ isFinished }: Props) => {
  const [progress, loadingText] = useLoader(loadingTexts, isFinished);

  return (
    <div className={style.loader}>
      <Image src={"/loading.gif"} width={400} height={400} alt="loading" />
      <Progress value={progress} className="w-full mt-4" />
      <h2 className="mt-2 text-xl">{loadingText}</h2>
    </div>
  );
};

export default QuestionLoader;
