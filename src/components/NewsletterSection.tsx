/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./NewsletterSection.module.css";
import SubscriptionBox from "./SubscriptionBox.tsx";
import SocialButton from "./SocialButton.tsx";

const NewsletterSection: React.FC = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.flexContainer}>
            <div className={styles.mainColumn}>
              <div className={styles.contentArea}>
                <div className={styles.innerFlexContainer}>
                  <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                      <div className={styles.textWrapper}>
                        <h2 className={styles.title}>Что говорят о нас</h2>
                        <p className={styles.subtitle}>
                          Актуальные отзывы от клиентов
                        </p>
                      </div>
                      <div className={styles.reviewBadge}>1500+ отзывов</div>
                    </div>
                  </div>
                  <div className={styles.imageColumn}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e626cb22ad508110d69652de3b8fcb8268cd82216f021a0eb43cb22f6c2d9bdb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                      className={styles.image}
                      alt="Customer reviews illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonColumn}>
              <button className={styles.mainButton}>Смотреть отзывы</button>
            </div>
          </div>
        </div>
        <div className={styles.subscriptionContainer}>
          <SubscriptionBox
            title="Подпишись на нашу рассылку"
            subtitle="Рассказываем все новости игрового мира"
            buttonText="Подписаться"
          />
          <SubscriptionBox
            title="Подпишись на наш Telegram-канал"
            subtitle="Постим самые интересные новости первыми"
            socialButtons={[
              <SocialButton
                key="telegram"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1021b20e4b339769a66f71981e2c0a66f1638f472a0dc3fe548ebb86f9d71993?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                text="Telegram"
              />,
              <SocialButton
                key="vk"
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7490f451963d2424a81b7b83991ebea348b8dab4f53e830e2f7000e3f53566?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
                text="Вконтакте"
              />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
