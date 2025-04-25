import React, { useState, useEffect } from 'react';
import sl from './Slaider.module.css';
import katrineImg from "../../assets/img/pets-katrine.png";
import jenniferImg from "../../assets/img/pets-jennifer.png";
import woodyImg from "../../assets/img/pets-woody.png";


const allCards = [
  { name: 'Katrine', img: katrineImg},
  { name: 'Jennifer', img: jenniferImg},
  { name: 'Woody', img:  woodyImg },
  { name: 'Max', img:   jenniferImg},
  { name: 'Luna', img:  katrineImg },
  { name: 'Charlie', img:  woodyImg }
];

export const Slaider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

 
  const scrollLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.floor((allCards.length - 1) / cardsPerPage) * cardsPerPage : prev - cardsPerPage
    );
  };

  
  const scrollRight = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= allCards.length ? 0 : prev + cardsPerPage
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  
  const visibleCards = allCards.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className={sl.petCarouselContainer}>
      <h2 className={sl.carouselTitle}>
        Our friends who<br />are looking for a house
      </h2>

      <div className={sl.carouselWrapper}>
        <button className={`${sl.scrollButton} ${sl.left}`} onClick={scrollLeft}>
          ←
        </button>
        <div className={sl.petCarousel}>
          {visibleCards.map((card, i) => (
            <div className={sl.petCard} key={i}>
              <div className={sl.petImage} style={{ backgroundImage: `url(${card.img})` }}></div>
              <h3>{card.name}</h3>
              <button className={sl.learnMore}>Забрать</button>
            </div>
          ))}
        </div>
        <button className={`${sl.scrollButton} ${sl.right}`} onClick={scrollRight}>
          →
        </button>
      </div>

      <button className={sl.getToKnow}>Хочу помочь</button>
      <div></div>
    </div>
  );
};
