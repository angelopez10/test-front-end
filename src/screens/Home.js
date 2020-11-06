import React from "react";
import HotelList from "../components/HotelList";
import Menu from "../components/Menu";
import RightSection from "../components/RightSection";
import WelcomeCard from "../components/WelcomeCard";
import { Title } from "../styles/Title";

const Home = () => {
  return (
    <>
      <div className="containerCenter">
        <div className="row flex-dir-c">
          <WelcomeCard />
          <Menu />
          <Title>Hoteles</Title>
          <HotelList />
        </div>
        <RightSection />
      </div>
    </>
  );
};

export default Home;
