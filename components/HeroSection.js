"use client";
import styles from "@/styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>
          The Best Fitness Classes <br /> <span>With Professionals</span>
        </h1>
        <p>Make a website you'll be proud of</p>
        <a href="#signup" className={styles.button}>Join Now</a>
      </div>
    </section>
  );
}