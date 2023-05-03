import React from "react";
import "./Footer.scss";
import Logo from "../../data/mainLogo2.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInfo">
        <div className="logoContainer">
          <div className="mainLogo">
            <img src={Logo} alt="" />
          </div>
          <div className="phoneContainer">
            <div>+370(646)27 181</div>
          </div>
          <div className="legalDetails">
            <div>IV PAŽYMOS Nr. 989535</div>
            <div>Daniel Bukel</div>
            <div>
              Adresas: Tilto g.14, Užugriovis, Riešes sen., Vilniaus r. sav.,
            </div>
            <div>LT-14256</div>
          </div>
        </div>
        <div className="allLinks">
          <div className="links">
            <a href="/#">Pagrindinis</a>
            <a href="/#">Apie Mane</a>
            <a href="/#">Paslaugos</a>
            <a href="/#">Bendradarbiavimas</a>
          </div>
          <div className="links">
            <a href="/#">Komentarai</a>
            <a href="/#">Blogas</a>
            <a href="/#">Kontaktai</a>
          </div>
        </div>
      </div>
      <div className="footerCo">
        <div>© {new Date().getFullYear()} All Rights Reserved</div>
        <div>FrontEnd Solutions</div>
      </div>
    </div>
  );
};

export default Footer;
