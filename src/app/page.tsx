import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInButton from "@/components/signInButton/SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Trivia Wizard</CardTitle>
          <CardDescription>
            Welcome to Trivia Wizard, your ultimate destination for endless quiz
            fun! Unleash the power of AI as our innovative app generates
            exciting quizzes tailored just for you. Challenge your knowledge,
            learn something new, and embark on an adventure of intellectual
            exploration with Trivia Wizard today!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </main>
  );
}
