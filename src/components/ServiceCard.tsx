
import React from "react";
import styles from "./XboxServices.module.css";

interface ServiceData {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceData;
  isReversed: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isReversed }) => {
  const { title, description, imageSrc, features } = service;

  const content = (
    <div className={styles.serviceContent}>
      <h2 className={styles.serviceTitle}>{title}</h2>
      <p className={styles.serviceDescription}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <img
              src={`http://b.io/ext_${index + 5}-`}
              alt=""
              className={styles.featureIcon}
            />
            <span className={styles.featureText}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const image = (
    <img src={imageSrc} alt={title} className={styles.serviceImage} />
  );

  return (
    <div className={styles.serviceRow}>
      {isReversed ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
};

export default ServiceCard;
