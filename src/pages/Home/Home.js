import React from "react";
import { heroHome, dataInfoHome, dataCustomer} from "./DataHome";
import { Hero ,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <Hero {...heroHome} />
    <InfoHRFHome {...dataInfoHome}/>
    <CustomersHome {...dataCustomer}/>
    </>
  );
};

export default Home;
