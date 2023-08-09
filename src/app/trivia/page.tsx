import React from "react";
import { Metadata } from "next";
import { getAuthSession } from "@/lib/nextauth";
import TriviaForm from "@/components/triviaForm/TriviaForm";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Trivia",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Trivia = async ({ searchParams }: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    return redirect("/");
  }

  return <TriviaForm topic={searchParams.topic ?? ""} />;
};

export default Trivia;
