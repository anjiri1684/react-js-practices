import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remaingTime, setRemaingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("setting interval");
    const interval = setInterval(() => {
      setRemaingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log("clearing interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remaingTime}
      className={mode}
    />
  );
}
