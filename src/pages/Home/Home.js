import React from "react";
import { heroHome, dataInfoHome} from "./DataHome";
import { Hero ,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <Hero {...heroHome} />
    <InfoHRFHome {...dataInfoHome}/>
    <CustomersHome></CustomersHome>
    </>
  );
};

export default Home;
