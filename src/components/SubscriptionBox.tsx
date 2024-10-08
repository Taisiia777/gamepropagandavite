/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./NewsletterSection.module.css";

interface SubscriptionBoxProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  socialButtons?: React.ReactNode[];
}

const SubscriptionBox: React.FC<SubscriptionBoxProps> = ({
  title,
  subtitle,
  buttonText,
  socialButtons,
}) => {
  return (
    <div className={styles.subscriptionBox}>
      <div className={styles.subscriptionContent}>
        <h3 className={styles.subscriptionTitle}>{title}</h3>
        <p className={styles.subscriptionSubtitle}>{subtitle}</p>
      </div>
      {buttonText ? (
        <form className={styles.subscriptionForm}>
          <input
            type="email"
            id="emailInput"
            className={styles.emailInput}
            placeholder="Email"
            aria-label="Email"
          />
          <button type="submit" className={styles.subscribeButton}>
            {buttonText}
          </button>
        </form>
      ) : (
        <div className={styles.subscriptionForm}>{socialButtons}</div>
      )}
    </div>
  );
};

export default SubscriptionBox;
