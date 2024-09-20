
import React from "react";
import styles from "./Promotions.module.css";

interface PromotionItem {
  image: string;
  title: string;
  price: string;
}

const promotionItems: PromotionItem[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/30a40fd0b4645f820a5206e2cd2d190b91392c6be118c6d6763b87782ca97bf6?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Game Pass",
    price: "9 490 ₽",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dcce9bbfc00c56ee7efd6cac982025ad6660ff1834904f6569dfaa69378638f4?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Game Pass",
    price: "9 490 ₽",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ee540a092b5de583f604a037a4dbc0b8b91eff191a720975d99f365a905aaa31?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Game Pass",
    price: "9 490 ₽",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/02ea570750a79f27a9940fcb20a771c16033b1ce69a0fe9837f326ab1a279c6c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    title: "Game Pass",
    price: "9 490 ₽",
  },
];

const Promotions: React.FC = () => {
  return (
    <section className={styles.promotions}>
      <div className={styles.promotionList}>
        {promotionItems.map((item, index) => (
          <div key={index} className={styles.promotionItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.promotionImage}
            />
            <div className={styles.promotionContent}>
              <h3 className={styles.promotionTitle}>{item.title}</h3>
              <p className={styles.promotionPrice}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewAllButton}>Смотреть все акции</button>
    </section>
  );
};

export default Promotions;
