import React from "react";
import { ContainerContact,heroHome } from "./DataContact"
import {Hero, FormContact,Location} from "../../components"

const Contact = () => {
return (
    <>
    <ContainerContact>
    <Hero {...heroHome} />
    <FormContact></FormContact>
    <Location></Location>
    </ContainerContact>
    </>
);
};

export default Contact;
