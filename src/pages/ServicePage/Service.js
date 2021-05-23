import React from "react";
import { ContainerService,HeroService,ServicePlan } from "./DataService"
import {ServicePlans,Hero} from "../../components"

const Service = () => {
return (
    <>
    <ContainerService>
    <Hero {...HeroService} />
    <ServicePlans {...ServicePlan}></ServicePlans>
    </ContainerService>
    </>
);
};

export default Service;
