import React from "react";
import { ContainerContact } from "./DataContact"
import { HomeSection,FormContact,Location} from "../../components"

const Contact = () => {
return (
    <>
    <ContainerContact>
    <HomeSection></HomeSection>
    <FormContact></FormContact>
    <Location></Location>
    </ContainerContact>
    </>
);
};

export default Contact;
