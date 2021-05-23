import React from "react";
import { ContainerService,HeroService } from "./DataService"
import {ServicePlans,Hero} from "../../components"

const Service = () => {
return (
    <>
    <ContainerService>
    <Hero {...HeroService} />
    <ServicePlans></ServicePlans>
    </ContainerService>
    </>
);
};

export default Service;
