import React from "react";
import shopProduct from "./Shop.module.css";
import foods from "../../../assets/icons/foods.svg";
import transport from "../../../assets/icons/foods.svg";
import toys from "../../../assets/icons/foods.svg";
import bowls from "../../../assets/icons/foods.svg";
import shampoos from "../../../assets/icons/foods.svg";
import vitamins from "../../../assets/icons/foods.svg";
import medicines from "../../../assets/icons/foods.svg";
import leashes from "../../../assets/icons/foods.svg";
import sleeping from "../../../assets/icons/foods.svg";

export const Shop = () => {
  const shopIcon = [
    {
      id: 1,
      icon: foods,
      title: Petfood,
    },
    {
      id: 2,
      icon: transport,
      title: Transportation,
    },
    {
      id: 3,
      icon: toys,
      title: Toys,
    },
    {
      id: 4,
      icon: bawls,
      title: Bowlsandcups,
    },
    {
      id: 5,
      icon: shampoos,
      title: Shampoos,
    },
    {
      id: 6,
      icon: vitamins,
      title: Vitamins,
    },
    {
      id: 7,
      icon: medicines,
      title: Medicines,
    },
    {
      id: 8,
      icon: leashes,
      title: Collars / leashes,
    },
    {
      id: 9,
      icon: sleeping,
      title: Sleepingareas,
    },
  ];

  return (
    <>
      <div className={shopProduct.shop}>
        <div className={shopProduct.container}>
          <div className={shopProduct.shopWrapper}>
            <p className={shopProduct.shopTittle}>
              How you can help <br />
              our shelter
            </p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
