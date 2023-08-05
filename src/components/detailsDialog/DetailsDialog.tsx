import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import style from "./DetailsDialog.module.css";
import { Github, HelpCircle, Linkedin } from "lucide-react";
import Link from "next/link";

const DetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className={style.dialog_trigger}>
          What is this
          <HelpCircle className={style.trigger_circle} />
        </span>
      </DialogTrigger>
      <DialogContent className={style.dialog_content}>
        <DialogHeader>
          <DialogTitle className={style.dialog_title}>
            Welcome to Trivia Wizard
          </DialogTitle>
          <DialogDescription>
            <div className={style.dialog_description}>
              <p className={style.dialog_link}>
                <Github className="w-5 h-5" />
                <Link
                  className="ml-1 underline"
                  href="https://github.com/16Bogdan54"
                >
                  GitHub
                </Link>
              </p>
              <p className={style.dialog_link}>
                <Linkedin className="w-5 h-5" />
                <Link
                  className="ml-1 underline"
                  href="https://www.linkedin.com/in/bohdan-yunakov-1949851a2/"
                >
                  Linkedin
                </Link>
              </p>
            </div>
            <p className="my-2 mt-4">
              Trivia Wizard is your ultimate destination for endless quiz fun!
              Unleash the power of AI as our innovative app generates exciting
              quizzes tailored just for you. Challenge your knowledge, learn
              something new, and embark on an adventure of intellectual
              exploration with Trivia Wizard today!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
