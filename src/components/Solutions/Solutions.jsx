import React from "react";
import "./Solutions.scss";
import kitchen from "../../data/kitchen.jpg";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solLeft">
        <div className="solTitle">
          <h1>Greiti, patikimi ir kokybiški sprendimai.</h1>
          <h2>Santechnikas su patirtimi!</h2>
        </div>
        <div className="solInfo">
          <p>
            Mūsų santechnikos paslaugos apima nuo paprastų vandens ir
            kanalizacijos problemų sprendimo iki sudėtingų vandentiekio ir
            kanalizacijos sistemų remonto darbų, siekiant užtikrinti maksimalų
            Jūsų patogumą ir saugumą.
          </p>
        </div>
      </div>
      <div className="solRight">
        <div className="imageFrame">
          <img src={kitchen} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
