/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./NewsletterSection.module.css";

interface SocialButtonProps {
  icon: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text }) => {
  return (
    <button className={styles.socialButton}>
      <img src={icon} alt="" className={styles.socialIcon} />
      <span className={styles.socialText}>{text}</span>
    </button>
  );
};

export default SocialButton;
