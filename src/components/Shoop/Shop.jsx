import React from "react";
import shopProduct from "./Shop.module.css";
import foods from "../../assets/icons/foods.svg";
import transport from "../../assets/icons/transport.svg";
import toys from "../../assets/icons/toys.svg";
import bowls from "../../assets/icons/bowls.svg";
import shampoos from "../../assets/icons/shampoos.svg";
import vitamins from "../../assets/icons/vitamins.svg";
import medicines from "../../assets/icons/medicines.svg";
import leashes from "../../assets/icons/leashes.svg";
import sleeping from "../../assets/icons/sleeping-area.svg";

export const Shop = () => {
  const shopIcon = [
    {
      id: 1,
      icon: foods,
      title: "Pet food",
    },
    {
      id: 2,
      icon: transport,
      title: "Transportation",
    },
    {
      id: 3,
      icon: toys,
      title: "Toys",
    },
    {
      id: 4,
      icon: bowls,
      title: "Bowls and cups",
    },
    {
      id: 5,
      icon: shampoos,
      title: "Shampoos",
    },
    {
      id: 6,
      icon: vitamins,
      title: "Vitamins",
    },
    {
      id: 7,
      icon: medicines,
      title: "Medicines",
    },
    {
      id: 8,
      icon: leashes,
      title: "Collars / leashes",
    },
    {
      id: 9,
      icon: sleeping,
      title: "Sleeping areas",
    },
  ];

  return (
    <>
      <div className={shopProduct["shop"]}>
        <div className={shopProduct["container"]}>
          <div className={shopProduct["shopWrapper"]}>
            <p className={shopProduct["shopTittle"]}>
              How you can help <br />
              our shelter
            </p>
            <ul className={shopProduct["shopIcon-list"]}>
              {shopIcon.map((icon) => (
                <li className={shopProduct["shopIcon-item"]} key={icon.id}>
                  <img
                    className={shopProduct["shopIcon-link"]}
                    src={icon.icon}
                    href="#"
                  ></img>
                  <p className={shopProduct["shopIcon-text"]}> {icon.title} </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
