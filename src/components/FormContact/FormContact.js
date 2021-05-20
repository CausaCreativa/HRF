import React from "react";
import { FormContactElements } from "./FormContact.elements";

const FormContact = () => {
  return (
    <>
      <FormContactElements>
        <div class="contact">
          <h1 class="title">CONTACTO</h1>
          <div class="left">
            <div class="form">
              <p class="full">
                Si deseas contactarte con nosotros no dudes en escribirnos,
                estaros atentos siempre ante tus inquietudes.
              </p>
              <input class="full form-input" placeholder="Nombre"></input>
              <input class="full form-input" placeholder="Correo"></input>
              <textarea
                rows="10"
                cols="40"
                class="full form-input"
                placeholder="Mensaje"
              ></textarea>
              <button class="form-input button">Enviar</button>
            </div>
          </div>
          <div class="right">
            <img
              class="contact_img"
              src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"
            ></img>
          </div>
        </div>
      </FormContactElements>
    </>
  );
};

export default FormContact;
