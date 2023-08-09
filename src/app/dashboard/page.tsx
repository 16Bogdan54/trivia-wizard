import React from "react";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

import style from "./Dashboard.module.css";
import DetailsDialog from "@/components/detailsDialog/DetailsDialog";
import QuizMe from "@/components/dashboard/quizMe/QuizMe";
import History from "@/components/dashboard/history/History";
import HotTopics from "@/components/dashboard/hotTopics/HotTopics";
import RecentActivity from "@/components/dashboard/recentActivity/RecentActivity";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Quiz yourself on anything!",
};

const Dashboard = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <main className={style.dashboard}>
      <div className={style.dashboard_details}>
        <h2 className={style.details_heading}>dashboard</h2>
        <DetailsDialog />
      </div>
      <div className={style.quiz_cards}>
        <QuizMe />
        <History />
      </div>
      <div className={style.topic_cards}>
        <HotTopics />
        <RecentActivity />
      </div>
    </main>
  );
};

export default Dashboard;
