import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

import style from "./Card.module.css";

type Props = { accuracy: number };

const AccuracyCard = ({ accuracy }: Props) => {
  accuracy = Math.round(accuracy * 100) / 100;

  return (
    <Card className={style.card}>
      <CardHeader className={style.card_header}>
        <CardTitle className={style.card_title}>Average Accuracy</CardTitle>
        <Target />
      </CardHeader>
      <CardContent>
        <p className={style.card_content}>{accuracy.toString() + "%"}</p>
      </CardContent>
    </Card>
  );
};

export default AccuracyCard;
