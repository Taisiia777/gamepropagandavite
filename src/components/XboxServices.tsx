
import React from "react";
import styles from "./XboxServices.module.css";
import ServiceCard from "./ServiceCard.tsx";

interface ServiceData {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
}

const services: ServiceData[] = [
  {
    title: "Завести аккаунт",
    description: "Команда Game Propaganda поможет тебе оформить аккаунт XBOX",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f7bca666f05d575121a98e6b894bb8a6803f26564ee4e88d119d4f3afab0a82?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    features: [
      "От 2-х до 4-х часов у тебя будет доступ к твоему аккаунту",
      "После покупки ты можешь поменять все данные и подключить 2FA",
      "Низкие цены на игры и подписку",
    ],
  },
  {
    title: "Оформить подписку",
    description:
      "Команда Game Propaganda поможет тебе оформить подписку GAME PASS",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/37efe667df47a4fdfb3b02965a1f325da12616cd1a22952aab8276cd33bed861?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    features: [
      "Продлим старую или оформим новую на твою почту",
      "Ты можешь подключить автоматические платежи",
      "Напомним, когда подписка закончится",
    ],
  },
  {
    title: "Купить игру",
    description:
      "Менеджеры Game Propaganda помогут тебе купить любую игру, которая есть на официальном сайте XBOX",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/13e336fcc1bfcb93900cf0371e4a634f5c92ef62e19374faefbfeaafc9c650bf?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    features: [
      "Полная интеграция",
      "Самый большой каталог",
      "Ежедневное обновление",
    ],
  },
];

const XboxServices: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc3f9ea22a8a22473fafef3902d500cd044ba1f4e9a9a5550a4f0af2f6b65496?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt=""
          className={styles.backgroundImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f25d4491b7fcc69d1854b6e3ee6a55e95900baed2809209c86c86416dadf3d5?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="Xbox Game Pass"
          className={styles.headerImage}
        />
        <div className={styles.content}>
          <header className={styles.title}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16a96967fc37bf9929734f21d43810a5f4409dce4535a4d583aa6e75d58ddf42?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt="Xbox logo"
              className={styles.logoImage}
            />
            <h1 className={styles.heading}>
              ... и провернули тоже самое для Xbox
            </h1>
          </header>
          <div className={styles.servicesContainer}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default XboxServices;
