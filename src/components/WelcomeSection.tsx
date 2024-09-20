
import React from "react";
import styles from "./WelcomeSection.module.css";
import FeatureCard from "./FeatureCard.tsx";

const features = [
  { emoji: "💬", description: "2000 Положительных отзывов" },
  { emoji: "💻", description: "Работа 24/7" },
  { emoji: "💳", description: "Официальные платежи" },
  { emoji: "🧑‍💻", description: "Офигенский личный кабинет" },
  { emoji: "🫶", description: "Заботливый сервис" },
  { emoji: "🤩", description: "Пожизненная гарантия" },
  { emoji: "📜", description: "Прозрачная публичная оферта" },
  { emoji: "👾", description: "Большое коммьюнити из 15к человек" },
  { emoji: "🎮", description: "Самый большой каталог игр в России" },
  { emoji: "🧑", description: "Поддержка 200 блогеров" },
  { emoji: "🚀", description: "Индивидуальный подход" },
];

const WelcomeSection: React.FC = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c3ecf4124a19f14c0de0c5771fba1b6942e9f72ee4325074e73d9bb77de444c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            className={styles.logo}
            alt="Welcome logo"
          />
          <h1 className={styles.title}>
            Мы создали сервис, которым пользуемся сами
          </h1>
        </header>
        <div className={styles.featureGrid}>
          <img src="public/features.png" alt="" style={{width: "906px", height:"212px"}}/>
          {/* {features.map((feature, index) => (
            <FeatureCard
              key={index}
              emoji={feature.emoji}
              description={feature.description}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
