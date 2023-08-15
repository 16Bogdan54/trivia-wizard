import React from "react";
import { Card } from "@/components/ui/card";
import { Percent, Target } from "lucide-react";
import style from "./OpenEnded.module.css";

type Props = {
  percentage: number;
};

const OpenEndedPercentage = ({ percentage }: Props) => {
  return (
    <Card className={style.percentage_card}>
      <Target size={30} />
      <span className={style.percentage}>{percentage}</span>
      <Percent size={25} />
    </Card>
  );
};

export default OpenEndedPercentage;
