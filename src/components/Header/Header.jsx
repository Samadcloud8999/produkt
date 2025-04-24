import React from "react";
import logo from "../../assets/icons/Logo.svg";
import Hdrcss from "./Header.module.css"
import texture from "../../assets/img/texture.png";
import background from "../../assets/img/background.jpg";
import dog from "../../assets/img/dog.png";

const navItems = [
  { label: "About the shelter", href: "#about" },
  { label: "Our pets", href: "#pets" },
  { label: "Help the shelter", href: "#help" },
  { label: "Contacts", href: "#contacts" },
];

export default function Header() {
  return (
    <header className={Hdrcss.header} style={{ backgroundImage: `url(${texture})` }}>
      <div className={`${Hdrcss.container} ${Hdrcss.header-top}`}>
        <div className={Hdrcss.branding}>
          <img src={logo} alt="Cozy House Logo" className="logo" />
        </div>

        <nav className={Hdrcss.nav}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className={index === 0 ? "active" : ""}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={Hdrcss.banner} style={{ backgroundImage: `url(${background})` }}>
        <div className={`${Hdrcss.container} ${Hdrcss.banner-content}`}>
          <div className={Hdrcss.banner-text}>
            <h2>Not only people need a house</h2>
            <p>
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button className={Hdrcss.btn}>Make a friend</button>
          </div>
          <img src={dog} alt="Cute puppy" className={Hdrcss.banner-dog} />
        </div>
      </div>
    </header>
  );
}
