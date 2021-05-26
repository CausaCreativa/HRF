import React from "react";
import { heroContact } from "./DataContact"
import { FormContact,Location, Hero} from "../../components"

const Contact = () => {
return (
    <>
    <Hero {...heroContact}/>
    <FormContact></FormContact>
    <Location></Location>
    </>
);
};

export default Contact;
