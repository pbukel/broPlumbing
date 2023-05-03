import React from "react";
import Logo from "../../data/mainLogo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="leftLogo">
        <img src={Logo} alt="" />
      </div>
      <div className="rightNavigation">
        <div className="navTop">
          <a className="topLink" href="/#">
            Komentarai
          </a>
          <a className="topLink" href="/#">
            Blogas
          </a>
          <a className="topLink" href="/#">
            Kontaktai
          </a>
          <div className="phone">
            <a href="/#">+370(646)27 181</a>
          </div>
        </div>
        <div className="navBottom">
          <a className="bottomLink" href="/#">
            Pagrindinis
          </a>
          <a className="bottomLink" href="/#">
            Apie Mane
          </a>
          <a className="bottomLink" href="/#">
            Paslaugos
          </a>
          <a className="bottomLink" href="/#">
            Bendradarbiavimas
          </a>
          <div className="request">
            <a href="/#">Siūsti užklausą</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
