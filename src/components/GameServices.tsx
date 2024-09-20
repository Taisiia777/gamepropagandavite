import React from 'react';
import styles from './GameServices.module.css';
import ServiceItem from './ServiceItem.tsx';

const services = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/756c77dbb0c1cc0c23fc11dfb81511ec02c4597d7903f7ed80f366f4a5f57e97?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Пополнить аккаунт Sony" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cc9801df25bfcbd091ea87e151388a5176c0d40f63b2216d679300667792c90?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Пополнить аккаунт Xbox" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/88326d67886ae5e30e73c7cb61d4217016247dda77f7c8f74a3b384c97912e9d?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Создать аккаунт Sony", iconClass: styles.sonyAccountIcon },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8456ccb0fcf4a2efeaa10f1ed736c313ea35fcc39db1285c7575cc967dfc70f2?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Создать аккаунт Xbox" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eca9735caaa8cf22243f9635419aa9a630dad3b0ca43f72a314f8ae185bebf2c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Подписка Ubisoft+", width: "69px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d54de9e79c3a77eb7d7a8c751611077ca4ef2938ea85be6b88dae69e16dcabeb?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Подписка EA Play", width: "69px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc306d4ad19c7763a6030f2733d2b3ef8782847f5e1e7f5b1e49aa4319a8c07c?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Подписка PS Plus", width: "69px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5762276cc06b76c0dbd1419471c53717f882ad116ff313454ea6c5c7c9a48be?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Подписка Xbox Game Pass", width: "112px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7108844b197eecd79901e6d0030026123abb332e769425d2b639d937d16cbc3b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Валюта FC Points", width: "66px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/999bd20a309fa4a55eecb973311bdd0535a3c454f10f9beaae990eff5a9ac492?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Валюта Fortnite V-bucks", width: "121px" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b5a4f40fa27e43de6e4cb9fe70caa4706f13857643ec30d62b3962375043b85?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c", name: "Подписка Netflix", width: "69px" }
];

const GameServices: React.FC = () => {
  return (
    <section className={styles.row}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb38cb344ef4b4b06fec94740df86a327644b19e5244beb1b25f7e62186f8158?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className={styles.icon} />
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            iconSrc={service.iconSrc}
            name={service.name}
            width={service.width}
          />
        ))}
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/757f2be47058cf253142a7481eef697f148f191b02eee7c0b727a2a705d54218?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="" className={styles.icon} />
    </section>
  );
};

export default GameServices;