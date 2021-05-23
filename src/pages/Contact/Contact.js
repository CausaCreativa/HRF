import React from "react";
import { ContainerContact, heroContact } from "./DataContact"
import { FormContact,Location, Hero} from "../../components"

const Contact = () => {
return (
    <>
    <Hero {...heroContact}/>
    <ContainerContact>
    <FormContact></FormContact>
    <Location></Location>
    </ContainerContact>
    </>
);
};

export default Contact;
