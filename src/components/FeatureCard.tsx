
import React from "react";
import styles from "./FeatureCard.module.css";

interface FeatureCardProps {
  emoji: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ emoji, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardContent}>
        <div className={styles.emoji}>{emoji}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
