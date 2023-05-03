import React from "react";
import "./Services.scss";
import { ReactComponent as EmergencyIcon } from "../../data/siren-icon.svg";
import { ReactComponent as HeaterIcon } from "../../data/heater.svg";
import { ReactComponent as WaterIcon } from "../../data/water.svg";
import { ReactComponent as DrainIcon } from "../../data/drain.svg";
import { ReactComponent as LeakIcon } from "../../data/leak.svg";
import { ReactComponent as CommercIcon } from "../../data/office-icon.svg";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="leftIcons">
        <div className="singleIcon">
          <div className="redIcon">
            <EmergencyIcon />
          </div>
          <div className="singleIconDesc">
            <p>Skubi pagalba</p>
          </div>
        </div>
        <div className="singleIcon">
          <div className="redIcon">
            <HeaterIcon />
          </div>
          <div className="singleIconDesc">
            <p>Vandens šildytuvų keitimas</p>
          </div>
        </div>
        <div className="singleIcon">
          <div className="redIcon">
            <WaterIcon />
          </div>
          <div className="singleIconDesc">
            <p>Vonių ir dušų kabinų montavimas</p>
          </div>
        </div>
        <div className="singleIcon">
          <div className="redIcon">
            <DrainIcon />
          </div>
          <div className="singleIconDesc">
            <p>Drenažo valymas</p>
          </div>
        </div>
        <div className="singleIcon">
          <div className="redIcon">
            <LeakIcon />
          </div>
          <div className="singleIconDesc">
            <p>Nuotėkio aptikimas</p>
          </div>
        </div>
        <div className="singleIcon">
          <div className="redIcon">
            <CommercIcon />
          </div>
          <div className="singleIconDesc">
            <p>Komercinės santechnikos paslaugos</p>
          </div>
        </div>
      </div>
      <div className="rightDesc">
        <h1>Santechnikos darbai - mūsų aistra ir patirtis</h1>
        <div className="rightDescContent">
          <p>
            Profesionali ir patikima santechnikos komanda, kuri specializuojasi
            sprendžiant sudėtingas vandens ir kanalizacijos problemas,
            užtikrins, kad Jūsų namų sanitarijos sistemų veikimas būtų patikimas
            ir ilgalaikis.Mūsų santechnikos paslaugų asortimente yra:
            vandentiekio ir kanalizacijos tinklų remontas, vonių ir dušų kabinų
            montavimas, santykių su kanalizacija valymas ir kt.
          </p>
          <p>
            <strong>Skambinkite dabar telefonu +370(646)27 181.</strong> Mūsų
            santechnikos komanda yra pasirengusi greitai ir veiksmingai
            išspręsti bet kokias Jūsų santechnikos problemas, siekiant
            užtikrinti Jūsų patogumą ir saugumą.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
