
import React from "react";
import styles from "./PlaystationServices.module.css";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
  isReversed: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  imageSrc,
  features,
  isReversed,
}) => {
  const content = (
    <>
      <img src={imageSrc} alt={title} className={styles.serviceImage} />
      <div className={styles.serviceText}>
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
    </>
  );

  return (
    <div className={styles.serviceRow}>{isReversed ? content : content}</div>
  );
};

export default ServiceSection;
