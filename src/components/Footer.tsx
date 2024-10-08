/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Footer.module.css";
import ContactInfo from "./ContactInfo.tsx";
import NavigationColumn from "./NavigationColumn.tsx";
import PaymentIcon from "./PaymentIcon.tsx";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const shopItems = ["каталог", "подписки", "скидки"];
  const customerItems = [
    "возвраты",
    "реквизиты",
    "политика конфиденциальности",
    "публичная оферта",
    "согласие на рекламную рассылку",
  ];
  const paymentMethods = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/42d8e40805ddb14c2d2bd6cfe87792cc67a72f6644cab1715d14a29c83af0b49?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "40px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3936719193fe151915042e95e53d795bcae1a8dc5eac3f7f486ba44fe3d2507c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "44px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6c0acd4b4bd53f6572ea97fb3e023298592f44e05443701e55a435dd49cb584?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "48px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bff9aa09c65e0a491d3c077f0c5850b3d115dd4c25166d40d0d0677aaa160a6a?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "42px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a3728f26f9c267ed0fe38219ee6060fff3b650335ea7e4b22f1cb53f1c3d79b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "36px",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb4af6c28eef177459f5a5311ec8e790174ff77742254c89aefaf57b948237b7?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
      width: "52px",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.divider} />
        <div className={styles.mainContent}>
          <ContactInfo />
          <nav className={styles.navSection}>
            <div className={styles.navColumns}>
              <NavigationColumn title="магазин" items={shopItems} />
              <NavigationColumn title="покупателям" items={customerItems} />
            </div>
          </nav>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>© 2024, «GamePropaganda»</div>
          <div className={styles.paymentIcons}>
            {paymentMethods.map((method, index) => (
              <PaymentIcon key={index} src={method.src} width={method.width} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
