import React from "react";
import { HeroService,Title} from "./DataService"
import {Hero,PanelService} from "../../components"

const Service = () => {
return (
    <>
    <Hero {...HeroService} />
    <h1 className="title_service">PLANES DE SERVICIO</h1>
    <PanelService></PanelService>
    </>
);
};

export default Service;
