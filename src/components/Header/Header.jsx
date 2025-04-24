  import React from "react";
  import logo from "../../assets/icons/Logo.svg";
  import Hdrcss from "./Header.module.css";
  import texture from "../../assets/img/texture.png";
  import background from "../../assets/img/background.jpg";
  import dog from "../../assets/img/dog.png";

  const navItems = [
    { label: "About the shelter", href: "#about" },
    { label: "Our pets", href: "#pets" },
    { label: "Help the shelter", href: "#help" },
    { label: "Contacts", href: "#contacts" },
  ];

  export const Header = () => {
    return (
      <header
        className={Hdrcss.header}
        style={{ backgroundImage: `url(${texture})` }}
      >
        <div className={`${Hdrcss.container} ${Hdrcss.headerTop}`}>
          <div className={Hdrcss.branding}>
            <img src={logo} alt="Cozy House Logo" className={Hdrcss.logo} />
          </div>

          <nav className={Hdrcss.nav}>
            <ul className={Hdrcss.navList}>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`${Hdrcss.navItem} ${
                    index === 0 ? Hdrcss.active : ""
                  }`}
                >
                  <a href={item.href} className={Hdrcss.navLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className={Hdrcss.banner}
          style={{ backgroundImage: `url(${background})` }}
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
