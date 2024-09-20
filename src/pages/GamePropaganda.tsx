
import React from "react";
import MenuComponent from "../components/MenuComponent";
import Hero from "../components/Hero";
import GameServices from "../components/GameServices";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";
import styles from "./GamePropaganda.module.css";
import PlayerSelection from "../components/PlayerSelection";
import HotDeals from "../components/HotDeals";
import WelcomeSection from "../components/WelcomeSection";
import PlaystationServices from "../components/PlaystationServices";
import XboxServices from "../components/XboxServices";
import GameStore from "../components/GameStore";
import MentionedOnInternet from "../components/MentionedOnInternet";
import NewsletterSection from "../components/NewsletterSection";
const GamePropaganda: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <MenuComponent />
      <main>
        <Hero />
        <GameServices />
        <Promotions />
        <PlayerSelection />
        <HotDeals />
        <WelcomeSection />
        <PlaystationServices />
        <XboxServices />
        <GameStore />
        <MentionedOnInternet />
        <NewsletterSection />

      </main>
      <Footer />
    </div>
  );
};

export default GamePropaganda;
