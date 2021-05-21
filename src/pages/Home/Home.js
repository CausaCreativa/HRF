import React from "react";
import { ContainerHome, heroHome} from "./DataHome";
import { Hero ,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <ContainerHome>
        <Hero {...heroHome} />
        <InfoHRFHome></InfoHRFHome>
        <CustomersHome></CustomersHome>
    </ContainerHome>
    </>
  );
};

export default Home;
