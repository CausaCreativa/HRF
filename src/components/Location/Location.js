import React from "react";
import { LocationElements } from "./Location.element";
import carta from "../../utils/image/carta.svg";
import electronico from "../../utils/image/comercio-electronico.svg";
import ubicacion from "../../utils/image/ubicacion.svg";

const Location = () => {
  return (
    <>
      <LocationElements>
        <div class="location">
          <h1>SEDE</h1>
          <div class="icon-panel">
            <div class="content-icon">
              <div class="background-icon">
                <img class="icon" src={carta}></img>
              </div>
              <p>hrfasociados@gmail.com</p>
            </div>
            <div class="content-icon">
              <div class="background-icon">
                <img class="icon" src={electronico}></img>
              </div>
              <p>320-225-4548</p>
            </div>
            <div class="content-icon">
              <div class="background-icon">
                <img class="icon" src={ubicacion}></img>
              </div>
              <p>Carrera 5 # 15-20</p>
            </div>
          </div>
          <div class="iframe-content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53503.86603481267!2d-74.0828060495594!3d4.647740263604447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5cf370137c5b168!2sTransmilenio%20Av.%20Chile!5e0!3m2!1ses-419!2sco!4v1620656199965!5m2!1ses-419!2sco"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </LocationElements>
    </>
  );
};

export default Location;
