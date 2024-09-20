
import React from "react";
import styles from "./MentionedOnInternet.module.css";
import UserCard from "./UserCard.tsx";

interface User {
  name: string;
  avatar: string;
  image: string;
}

const users: User[] = [
  {
    name: "Wingelm",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35a12a3ff0c79b2df064ae7781a025fff1f9b64b2511fc265e1307f805768049?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7b53b1b7ba6d6b960f331007b1a42c034f74d5210486f3187fc18d76cf0ce259?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    name: "Wingelm",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35a12a3ff0c79b2df064ae7781a025fff1f9b64b2511fc265e1307f805768049?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7b53b1b7ba6d6b960f331007b1a42c034f74d5210486f3187fc18d76cf0ce259?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    name: "Honeymad",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3e74e02fc8ea6625d1a979584e83ef28d069a24c58cfe908eb087d8de400c0cc?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5dd892143233dd16247e92ff6015086a2200019efebcf4fadfebc8a34b066923?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    name: "DEADP47",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cc98254a88373921a7c7c9bb731c5c5d22435c91db85609ea415f47c22628a79?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7b53b1b7ba6d6b960f331007b1a42c034f74d5210486f3187fc18d76cf0ce259?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
  {
    name: "GSTV",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2c007a008dc5b5ddede990ffab0817f813a9cd4c7b5a3cb36bbeebcf3ad8e808?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/48fc1b8b712670ab182ddd80026c74bf384c2be53e2bfd1755274fdedcaf36c3?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c",
  },
];

const MentionedOnInternet: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2805a3302182c5c5f540a914ef46f14f72627d180ee66b900e8909ba102d5103?placeholderIfAbsent=true&apiKey=f19410a7ed964887a882a08cb3ad097c"
          alt=""
          className={styles.logo}
        />
        <h1 className={styles.title}>Нас часто упоминают в интернетах</h1>
      </header>
      <div className={styles.cardContainer}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </section>
  );
};

export default MentionedOnInternet;
