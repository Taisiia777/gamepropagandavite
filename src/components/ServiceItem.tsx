import React from 'react';
import styles from './GameServices.module.css';

interface ServiceItemProps {
  iconSrc: string;
  name: string;
  width?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconSrc, name, width = '95px' }) => {
  return (
    <div className={styles.serviceItem} style={{ width }}>
      <img loading="lazy" src={iconSrc} alt="" className={styles.serviceIcon} />
      <div className={styles.serviceName}>{name}</div>
    </div>
  );
};

export default ServiceItem;