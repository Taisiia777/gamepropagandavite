import React from 'react';
import styles from './MenuComponent.module.css';
import NavigationItem from './NavigationItem.tsx';

const MenuComponent: React.FC = () => {
  const navigationItems = [
    { text: 'каталог' },
    { text: 'подписки', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33c2b98cda6e5be318319541cc105a353120ea650a1d054f8aff2432fe72fa7b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
    { text: 'блог' },
    { text: 'аккаунты', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33c2b98cda6e5be318319541cc105a353120ea650a1d054f8aff2432fe72fa7b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
    { text: 'баланс', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33c2b98cda6e5be318319541cc105a353120ea650a1d054f8aff2432fe72fa7b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c' },
  ];

  return (
    <nav className={styles.menu}>
      <div className={styles.menuContent}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/32930046cb9391feb1bad3658b6a588d07d061c90721f0c3845d204bf3f5cd2e?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="Logo" className={styles.logo} />
        <div className={styles.navigationWrapper}>
          <div className={styles.navigationItems}>
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} text={item.text} iconSrc={item.iconSrc} />
            ))}
          </div>
          <button className={styles.subscribeButton}>оформить подписку</button>
        </div>
        <div className={styles.userActions}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c7c8046a64f55a9a58df4d8198fb23627937744d63f32cbadf9d4b2308b99b?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="User action 1" className={styles.userIcon} />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca4fb9d3bc9212f9b516d7b8a964484e6b1a75cb74907e73035c24ea81086ca?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c" alt="User action 2" className={styles.userIcon} />
        </div>
      </div>
      <div className={styles.menuDivider} />
    </nav>
  );
};

export default MenuComponent;