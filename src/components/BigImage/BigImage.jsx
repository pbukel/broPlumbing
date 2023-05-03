import React from "react";
import "./BigImage.scss";
import bigJpg from "../../data/22.jpeg";

const BigImage = () => {
  return (
    <div className="bigImageContainer ">
      <img src={bigJpg} alt="" />
      <div className="bg-image"></div>
      <section className="imageInfo">
        <h2>
          Vandens ir kanalizacijos problemų sprendimas Vilniuje ir Vilniaus
          rajone
        </h2>
        <p>
          Teikiame išsamesnes santechnikos paslaugas Vilniuje ir Vilniaus
          rajone, skirtas ne tik paprastų vandens ir kanalizacijos problemų
          sprendimui, bet ir sudėtingesnių vandentiekio ir kanalizacijos sistemų
          remontui, vonių ir dušų kabinų montavimui, šildymo sistemų priežiūrai
          ir kt. Mūsų profesionali ir patikima santechnikos komanda yra
          pasirengusi užtikrinti, kad Jūsų namų sanitarijos sistemos būtų
          patikimos ir veiktų ilgalaikiai, užtikrinant Jūsų patogumą ir saugumą.
        </p>
      </section>
    </div>
  );
};

export default BigImage;
