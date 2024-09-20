
import React from "react";
import styles from "./GameStore.module.css";
import GameCard from "./GameCard.tsx";

interface Game {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

const games: Game[] = [
  {
    id: 1,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: 9490,
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: 9490,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: 9490,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: 9490,
  },
];

const GameStore: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8df9fe7b898a7662816fab9da0bb0184ffc004214be2d17de4aabcdffc9b7512?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
            alt="Game Store Logo"
            className={styles.logo}
          />
          <h1 className={styles.heading}>
            Покупай любую валюту для любимых игр
          </h1>
        </div>
      </header>
      <main className={styles.gameGrid}>
        {games.map((game) => (
          <GameCard
            key={game.id}
            imageUrl={game.imageUrl}
            title={game.title}
            price={game.price}
          />
        ))}
      </main>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23fdcc02a6edebcef5667085442387b3e1318ecc3a0a9486aabc96b98f178b53?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className={styles.decorativeImage}
      />
    </section>
  );
};

export default GameStore;
