import React from "react";
import { HeroService} from "./DataService"
import {Hero,PanelService} from "../../components"

const Service = () => {
return (
    <>
    <Hero {...HeroService} />
    <PanelService></PanelService>
    </>
);
};

export default Service;
