import React from "react";

export const useLoader = (
  loadingTexts: string[],
  isFinished: boolean
): [number, string] => {
  const [progress, setProgress] = React.useState<number>(() => 10);

  const [loadingText, setLoadingText] = React.useState<string>(loadingTexts[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (isFinished) return 100;

        if (prev === 100) {
          return 0;
        }

        if (Math.random() < 0.1) {
          return prev + 2;
        }

        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isFinished]);

  return [progress, loadingText];
};
