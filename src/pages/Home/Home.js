import React from "react";
import { heroHome} from "./DataHome";
import { Hero ,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <Hero {...heroHome} />
    <InfoHRFHome></InfoHRFHome>
    <CustomersHome></CustomersHome>
    </>
  );
};

export default Home;
