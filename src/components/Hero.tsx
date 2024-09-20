
import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img className={styles.mainImg} src="public/main.png" alt="" />
      <div className={styles.heroContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7279fc5bc6083ef2f474e744a7eb9c103d80a567e0a058e9ead7a7ce55dd4839?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Hero Icon"
          className={styles.heroIcon}
        />
        <h1 className={styles.heroTitle}>
          Покупайте игры и подписки Sony и Xbox без ограничений
        </h1>
        <p className={styles.heroDescription}>
          Присоединяйтесь к группе людей, которые доверяют Game Propaganda,
          потому что через нас быстро удобно и безопасно покупать любые игры.
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.ctaSony}>За покупками Sony</button>
          <button className={styles.ctaXbox}>За покупками Xbox</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
