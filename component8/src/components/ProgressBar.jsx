import { useState, useEffect } from "react";
export default function ProgressBar({ timer }) {
  const [remaingTime, setRemainingTime] = useState(timer);
  const interval = useEffect(() => {
    console.log("Interval");
    setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remaingTime} max={timer} />;
}
