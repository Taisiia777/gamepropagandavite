
import React from "react";
import styles from "./PlayerSelection.module.css";
import PlayerCard from "./PlayerCard";

const playerData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: "9 490 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: "9 490 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: "9 490 ₽",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1db612b45ac8aea299ffa9be53fb7116a8c8f7f733e77088ceb12e4fe9ec6b16?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Star Wars Outlaws",
    price: "9 490 ₽",
  },
];

const HotDeals: React.FC = () => {
  return (
    <section className={styles.playerSelection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Горячие скидки</h1>
        <div className={styles.cardContainer}>
          {playerData.map((player, index) => (
            <PlayerCard
              key={index}
              imageSrc={player.imageSrc}
              title={player.title}
              price={player.price}
            />
          ))}
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23fdcc02a6edebcef5667085442387b3e1318ecc3a0a9486aabc96b98f178b53?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
        alt=""
        className={styles.decorativeImage}
      />
    </section>
  );
};

export default HotDeals;
