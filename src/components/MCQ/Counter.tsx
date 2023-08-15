import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

import style from "./Counter.module.css";

type Props = {
  correct_answers: number;
  wrong_answers: number;
};

const Counter = ({ correct_answers, wrong_answers }: Props) => {
  return (
    <Card className={style.counter_card}>
      <CheckCircle2 color="green" size={30} />
      <span className={style.correct_answers}>{correct_answers}</span>

      <Separator orientation="vertical" />

      <span className={style.wrong_answers}>{wrong_answers}</span>
      <XCircle color="red" size={30} />
    </Card>
  );
};

export default Counter;
