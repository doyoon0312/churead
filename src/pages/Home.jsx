import React from 'react';
import HomeDetail from '../components/HomeDetail';

const Home = () => {
  return (
    <div className="px-6">
      <h1 className="flex justify-center">
        <img src="./images/logo.svg" alt="로고" />
      </h1>
      <form id="home-form">
        <HomeDetail
          name="chutzrit"
          detail="The subway is not fancy—in fact, riding it can suck with rat, smells
          and all lol—but there’ll never be anything more iconic? and effective
          for getting around the city, especially during NYFW."
        />
        <HomeDetail
          name="steamylit"
          detail="NO ONE TOLD ME IT WAS NATIONAL READ A BOOK DAY? WHY AM I WORKING? Well if you need a book you know we have a selection 🤭🤗."
        />
        <HomeDetail
          name="thespeakershack"
          detail="AVID HiFi Integra amplifier and EVO Three speakers 🔊❤️🇬🇧🙏"
        />
      </form>
    </div>
  );
};

export default Home;
