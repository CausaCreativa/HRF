import React from "react";
import { FormContactElements,PanelCont,Title,Panel,Form,Input,Textarea,Button,Image } from "./FormContact.elements";
import {formContact} from "../../pages/Contact/DataContact"
const FormContact = () => {
  return (
    <>
    <PanelCont>
      <Title>CONTACTO</Title>
      <Panel>
        <Form>
          <p>Si deseas contactarte con nosotros no dudes en escribirnos, estaros atentos siempre ante tus inquietudes.</p>
          <Input placeholder="Nombre"></Input>
          <Input  placeholder="Correo"></Input>
          <Textarea rows="10"
                cols="50" placeholder="Mensaje"></Textarea>
          <Button className="button">Enviar</Button>
        </Form>
      </Panel>
      <Panel>
        <Image {...formContact}/>
      </Panel>
    </PanelCont>
    </>
  );
};

export default FormContact;
