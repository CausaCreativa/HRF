import React from "react";
import { heroAbautUs,BackgroundAboutUs,TeamData} from "./DataAboutUs"
import { Hero,AboutUsComponent,OrganizationalDNA,Values,Team } from "../../components";
const AboutUs = () => {
return (
    <>
    <Hero {...heroAbautUs} />
    <AboutUsComponent {...BackgroundAboutUs}/>
    <OrganizationalDNA {...BackgroundAboutUs} />
    <Values {...BackgroundAboutUs} />
    <Team {...BackgroundAboutUs}{ ...TeamData}/>
    </>
);
};

export default AboutUs;
