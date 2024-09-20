
import React from "react";
import styles from "./PlaystationServices.module.css";
import ServiceSection from "./ServiceSection.tsx";

interface PlaystationServicesProps {}

const PlaystationServices: React.FC<PlaystationServicesProps> = () => {
  const services = [
    {
      title: "Завести аккаунт",
      description:
        "Команда Game Propaganda поможет тебе оформить аккаунт Sony Playstation",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a8d7a1a42ef2e74d116f290c9c7613cf8097be72c7d26042fd9dd9c8e25ba08d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      features: [
        "От 2-х до 4-х часов у тебя будет доступ к твоему аккаунту",
        "После покупки ты можешь поменять все данные и подключить 2FA",
        "Поможем связать старый и новый аккаунты",
      ],
    },
    {
      title: "Оформить подписку",
      description:
        "Команда Game Propaganda поможет тебе оформить подписку Sony Playstation",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2c2a7de7862aadeb7ac8f1ab344951c2b6c04ba6d250385b356d7c971814a6fa?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      features: [
        "Продлим старую или оформим новую на твою почту",
        "Ты можешь подключить автоматические платежи",
        "Напомним, когда подписка закончится",
      ],
    },
    {
      title: "Выбрать игру",
      description:
        "Каталог Game Propaganda включает в себя все игры, дополнения и новинки, которые появляются в официальном каталоге Sony",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/13e336fcc1bfcb93900cf0371e4a634f5c92ef62e19374faefbfeaafc9c650bf?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      features: [
        "Полная интеграция с каталогом Sony включая: игры, подписки, дополнения, наборы оружия и внутриигровой валюты",
        "Ежедневное обновление цен и актуальных скидок на все товары",
        "Самый большой каталог игр в России",
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/777abc63960d610538a02dd2711b05a12f34aa67844aec7e562505e1f95f60f3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt=""
          className={styles.backgroundImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1d500336b2febf35bff443b05f0464dad8996f98bd64f2f4188341de9c4d57b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt="PlayStation header"
          className={styles.headerImage}
        />
        <div className={styles.content}>
          <header className={styles.titleContainer}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a8e9cea96ea15b7bf702034db1b001a8bc90fc2d8e24da896175daf4cd5ebe?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
              alt="PlayStation logo"
              className={styles.logoImage}
            />
            <h1 className={styles.mainTitle}>
              Мы собрали все для Sony PlayStation в одном месте
            </h1>
          </header>
          <div className={styles.servicesContainer}>
            {services.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                features={service.features}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaystationServices;
