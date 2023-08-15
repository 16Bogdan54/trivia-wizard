"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as f from "@/components/ui/form";
import * as c from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import QuestionLoader from "@/components/questionsLoader/QuestionsLoader";
import { quizCreationSchema } from "@/schemas/forms";

import style from "./Form.module.css";

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

const TriviaForm = ({ topic: topicParam }: Props) => {
  const router = useRouter();

  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();

  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post("/api/game", { amount, topic, type });
      return response.data;
    },
  });

  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: "mcq",
      amount: 3,
    },
  });

  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive",
            });
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues("type") === "mcq") {
            router.push(`/play/mcq/${gameId}`);
          } else if (form.getValues("type") === "open_ended") {
            router.push(`/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };
  form.watch();

  if (showLoader) {
    return <QuestionLoader isFinished={finishedLoading} />;
  }

  return (
    <div className={style.card_container}>
      <c.Card>
        <c.CardHeader>
          <c.CardTitle className={style.card_title}>
            Trivia Creation
          </c.CardTitle>
          <c.CardDescription>Choose a topic</c.CardDescription>
        </c.CardHeader>
        <c.CardContent>
          <f.Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <f.FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <f.FormItem>
                    <f.FormLabel>Topic</f.FormLabel>
                    <f.FormControl>
                      <Input placeholder="Enter a topic" {...field} />
                    </f.FormControl>
                    <f.FormDescription>
                      Please provide any topic you would like to be quizzed on
                      here.
                    </f.FormDescription>
                    <f.FormMessage />
                  </f.FormItem>
                )}
              />
              <f.FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <f.FormItem>
                    <f.FormLabel>Number of Questions</f.FormLabel>
                    <f.FormControl>
                      <Input
                        placeholder="How many questions?"
                        type="number"
                        {...field}
                        onChange={(e) => {
                          form.setValue("amount", parseInt(e.target.value));
                        }}
                        min={1}
                        max={10}
                      />
                    </f.FormControl>
                    <f.FormDescription>
                      You can choose how many questions you would like to be
                      quizzed on here.
                    </f.FormDescription>
                    <f.FormMessage />
                  </f.FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button
                  variant={
                    form.getValues("type") === "mcq" ? "default" : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-l-lg"
                  onClick={() => {
                    form.setValue("type", "mcq");
                  }}
                  type="button"
                >
                  <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  variant={
                    form.getValues("type") === "open_ended"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-r-lg"
                  onClick={() => form.setValue("type", "open_ended")}
                  type="button"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                </Button>
              </div>
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </form>
          </f.Form>
        </c.CardContent>
      </c.Card>
    </div>
  );
};

export default TriviaForm;
