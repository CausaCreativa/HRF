import React from "react";
import { heroAbautUs } from "./DataAboutUs"
import { Hero,AboutUsComponent,OrganizationalDNA,Values,Team } from "../../components";
const AboutUs = () => {
return (
    <>
    <Hero {...heroAbautUs} />
    <AboutUsComponent></AboutUsComponent>
    <OrganizationalDNA></OrganizationalDNA>
    <Values></Values>
    <Team></Team>
    
    </>
);
};

export default AboutUs;
