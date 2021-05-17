import React from "react";
import { ContainerHome } from "./DataHome";
import { HomeSection,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <ContainerHome>
        <HomeSection></HomeSection>
        <InfoHRFHome></InfoHRFHome>
        <CustomersHome></CustomersHome>
    </ContainerHome>
    </>
  );
};

export default Home;
