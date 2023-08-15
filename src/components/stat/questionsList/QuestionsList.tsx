"use client";
import React from "react";

import * as t from "@/components/ui/table";
import { Question } from "@prisma/client";

type Props = {
  questions: Question[];
};

const QuestionsList = ({ questions }: Props) => {
  return (
    <t.Table className="mt-4">
      <t.TableCaption>End of list.</t.TableCaption>
      <t.TableHeader>
        <t.TableRow>
          <t.TableHead className="w-[10px]">No.</t.TableHead>
          <t.TableHead>Question & Correct Answer</t.TableHead>
          <t.TableHead>Your Answer</t.TableHead>
          {questions[0].questionType === "open_ended" && (
            <t.TableHead className="w-[10px] text-right">Accuracy</t.TableHead>
          )}
        </t.TableRow>
      </t.TableHeader>
      <t.TableBody>
        <>
          {questions.map((q, index) => (
            <t.TableRow key={index}>
              <t.TableCell className="font-medium">{index + 1}</t.TableCell>
              <t.TableCell>
                {q.question} <br />
                <br />
                <span className="font-semibold">{q.answer}</span>
              </t.TableCell>

              {questions[0].questionType === "open_ended" ? (
                <t.TableCell className={`font-semibold`}>
                  {q.userAnswer}
                </t.TableCell>
              ) : (
                <t.TableCell
                  className={`${
                    q.isCorrect ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {q.userAnswer}
                </t.TableCell>
              )}

              {q.percentageCorrect && (
                <t.TableCell className="text-right">
                  {q.percentageCorrect}
                </t.TableCell>
              )}
            </t.TableRow>
          ))}
        </>
      </t.TableBody>
    </t.Table>
  );
};

export default QuestionsList;
