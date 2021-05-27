import React from "react";
import { IconPanel,IframeContent,ContainerPanelLocation,PanelLocationBackground } from "./Location.element";
import {IconContacts} from "../../components"
import {IconCarta,IconElectronic,IconUbicacion,BackgroundService3} from "../../pages/Contact/DataContact"

const Location = () => {
  return (
    <>
    <ContainerPanelLocation>
      <PanelLocationBackground {...BackgroundService3}>
      <h1>SEDE</h1>
      <IconPanel>
        <IconContacts {...IconCarta}></IconContacts>
        <IconContacts {...IconElectronic}></IconContacts>
        <IconContacts {...IconUbicacion}></IconContacts>
      </IconPanel>
      <IframeContent>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53503.86603481267!2d-74.0828060495594!3d4.647740263604447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe5cf370137c5b168!2sTransmilenio%20Av.%20Chile!5e0!3m2!1ses-419!2sco!4v1620656199965!5m2!1ses-419!2sco"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
      </IframeContent>
      </PanelLocationBackground>
    </ContainerPanelLocation>
    </>
  );
};

export default Location;
