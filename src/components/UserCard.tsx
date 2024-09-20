
import React from "react";
import styles from "./MentionedOnInternet.module.css";

interface User {
  name: string;
  avatar: string;
  image: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <article className={styles.card}>
      <div className={styles.nameTag}>
        <div className={styles.userInfo}>
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className={styles.avatar}
          />
          <span className={styles.username}>{user.name}</span>
        </div>
      </div>
      {user.image && (
        <div className={styles.imageWrapper}>
          <img src={user.image} alt="" className={styles.cardImage} />
          <div className={styles.shadow} />
        </div>
      )}
    </article>
  );
};

export default UserCard;
