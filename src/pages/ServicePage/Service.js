import React from "react";
import { ContainerService } from "./DataService"
import { HomeSection,ServicePlans} from "../../components"
const Service = () => {
return (
    <>
    <ContainerService>
    <HomeSection></HomeSection>
    <ServicePlans></ServicePlans>
    </ContainerService>
    </>
);
};

export default Service;
