import React from "react";
import { HeroService,Title} from "./DataService"
import {Hero,PanelService} from "../../components"

const Service = () => {
return (
    <>
    <Hero {...HeroService} />
    <Title>PLANES DE SERVICIO</Title>
    <PanelService></PanelService>
    </>
);
};

export default Service;
