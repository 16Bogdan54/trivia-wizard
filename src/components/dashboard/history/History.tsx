"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { History as HistoryIcon } from "lucide-react";

import style from "./History.module.css";

const History = () => {
  const router = useRouter();

  return (
    <Card
      className={style.card}
      onClick={() => {
        router.push("/history");
      }}
    >
      <CardHeader className={style.card_header}>
        <CardTitle className={style.card_title}>History</CardTitle>
        <HistoryIcon size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        <p className={style.card_content}>View past quiz attempts.</p>
      </CardContent>
    </Card>
  );
};

export default History;
