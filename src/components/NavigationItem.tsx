import React from 'react';
import styles from './MenuComponent.module.css';

interface NavigationItemProps {
  text: string;
  iconSrc?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ text, iconSrc }) => {
  return (
    <div className={styles.navItem}>
      <div className={styles.navItemText}>{text}</div>
      {iconSrc && <img loading="lazy" src={iconSrc} alt="" className={styles.navItemIcon} />}
    </div>
  );
};

export default NavigationItem;