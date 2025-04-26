import React, { useState } from "react"; // Import useState
import logo from "../../assets/icons/Logo.svg";
import Hdrcss from "./Header.module.css";
import texture from "../../assets/img/texture.png";
import background from "../../assets/img/background.jpg";
import dog from "../../assets/img/dog.png";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About the shelter", to: "/about" },
  { label: "Our pets", to: "/our" },
  { label: "Help the shelter", to: "/helps" },
  { label: "Contacts", to: "/contacts" },
];

export const Header = () => {
  // State to track the active nav item
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle nav item click
  const handleNavClick = (index) => {
    setActiveItem(index);
  };

  return (
    <header
      className={Hdrcss.header}
      style={{ backgroundImage: `url(${texture})` }} // Исправленный синтаксис
    >
      <div className={`${Hdrcss.container} ${Hdrcss.headerTop}`}> {/* Исправлено объединение классов */}
        <div className={Hdrcss.branding}>
          <img src={logo} alt="Cozy House Logo" className={Hdrcss.logo} />
        </div>

        <nav className={Hdrcss.nav}>
          <ul className={Hdrcss.navList}>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${Hdrcss.navItem} ${
                  activeItem === index ? Hdrcss.active : ""
                }`} // Условное добавление активного класса
              >
                <Link
                  to={item.to}
                  className={Hdrcss.navLink}
                  onClick={() => handleNavClick(index)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={Hdrcss.banner}
        style={{ backgroundImage: `url(${background})` }} // Исправленный синтаксис
      >
        <div className={`${Hdrcss.container} ${Hdrcss.bannerContent}`}>
          <div className={Hdrcss.bannerText}>
            <h2 className={Hdrcss.title}>Not only people need a house</h2>
            <p className={Hdrcss.description}>
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button className={Hdrcss.btn}>Make a friend</button>
          </div>
          <img src={dog} alt="Cute puppy" className={Hdrcss.bannerDog} />
        </div>
      </div>
    </header>
  );
};
