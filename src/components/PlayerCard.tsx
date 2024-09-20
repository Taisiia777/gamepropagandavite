
import React from "react";
import styles from "./PlayerCard.module.css";

interface PlayerCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ imageSrc, title, price }) => {
  return (
    <article className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src={imageSrc}
              alt={title}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardPrice}>{price}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlayerCard;
