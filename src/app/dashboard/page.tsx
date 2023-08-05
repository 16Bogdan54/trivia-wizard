import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import style from "./Dashboard.module.css";
import DetailsDialog from "@/components/detailsDialog/DetailsDialog";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Quiz yourself on anything!",
};

const Dashboard = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className={style.dashboard}>
      <div className={style.dashboard_details}>
        <h2 className={style.details_heading}>dashboard</h2>
        <DetailsDialog />
      </div>
      <div className={style.quiz_cards}>
        <span>Quiz Me Card</span>
        <span>History card</span>
      </div>
      <div className={style.topic_cards}>
        <span>hot topics card</span>
        <span>recent activity card</span>
      </div>
    </main>
  );
};

export default Dashboard;
