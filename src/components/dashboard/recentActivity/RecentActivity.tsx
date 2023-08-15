import React from "react";
import * as c from "@/components/ui/card";
import Link from "next/link";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import ActivityHistory from "@/components/activityHistory/ActivityHistory";
import { prisma } from "@/lib/db";

const RecentActivity = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  const games_count = await prisma.game.count({
    where: {
      userId: session.user.id,
    },
  });

  return (
    <c.Card className="col-span-4 lg:col-span-3">
      <c.CardHeader>
        <c.CardTitle className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </c.CardTitle>
        <c.CardDescription>
          You have played a total of {games_count} quizzes.
        </c.CardDescription>
      </c.CardHeader>
      <c.CardContent className="max-h-[580px] overflow-scroll">
        <ActivityHistory limit={10} userId={session.user.id} />
      </c.CardContent>
    </c.Card>
  );
};

export default RecentActivity;
