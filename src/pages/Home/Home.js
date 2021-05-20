import React from "react";
import { ContainerHome,homeObjOne } from "./DataHome";
import { HomeSection,InfoHRFHome,CustomersHome} from "../../components";
const Home = () => {
return (
    <>
    <ContainerHome>
        <HomeSection {...homeObjOne}></HomeSection>
        <InfoHRFHome></InfoHRFHome>
        <CustomersHome></CustomersHome>
    </ContainerHome>
    </>
  );
};

export default Home;
