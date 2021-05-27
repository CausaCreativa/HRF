import React from "react";
import { PanelCont,Title,Panel,Form,Input,Textarea,Button,Image,ContainerPanelForm,PanelFormBackground} from "./FormContact.elements";
import {BackgroundService2} from "../../pages/Contact/DataContact"
const FormContact = () => {
  return (
    <>
    <ContainerPanelForm>
      <PanelFormBackground {...BackgroundService2}>

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
    </PanelCont>
      </PanelFormBackground>
    </ContainerPanelForm>
    
    </>
  );
};

export default FormContact;
