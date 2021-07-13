import React from "react";
import { heroAbautUs,BackgroundAboutUs,TeamData, desbordes} from "./DataAboutUs"
import { Hero,AboutUsComponent,OrganizationalDNA,Values,Team } from "../../components";
const AboutUs = () => {
return (
    <>
    <Hero {...heroAbautUs} />
    {/* <AboutUsComponent {...BackgroundAboutUs}/> */}
    <OrganizationalDNA {...BackgroundAboutUs} />
    <Values {...BackgroundAboutUs} {...desbordes} />
    <Team {...BackgroundAboutUs}{ ...TeamData}{...desbordes}/>
    </>
);
};

export default AboutUs;
