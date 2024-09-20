
import React from "react";
import styles from "./GameCard.module.css";

interface GameCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = ({ imageUrl, title, price }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src={imageUrl}
            alt={`${title} game cover`}
            className={styles.gameImage}
          />
        </div>
        <div className={styles.gameInfo}>
          <h3 className={styles.gameTitle}>{title}</h3>
          <p className={styles.gamePrice}>{price.toLocaleString()} ₽</p>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
