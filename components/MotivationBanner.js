"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/motivation.module.css";

export default function MotivationBanner() {
  const [position, setPosition] = useState(-100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 100 ? -100 : prev + 1));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.motivationContainer}>
      <div className={styles.motivationText} style={{ left: `${position}%` }}>
        Push yourself because no one else is going to do it for you.
      </div>
    </div>
  );
}
