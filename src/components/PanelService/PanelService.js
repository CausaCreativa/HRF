import React from 'react'
import {PanelServiceElement,PanelServiceElementCenter,BackgroundTop,ContainerBackgroundTop,ContainerBackgroundBody,ContainerBackgroundBotton} from './PanelService.elements'
import { Servicio1,Servicio2,Servicio3,Servicio4,Servicio5,BackgroundService2,BackgroundService3} from "../../pages/ServicePage/DataService"
import {ServicePlans}  from "../../components"


const PanelService = () => {
    return (
        <>
        <ContainerBackgroundTop>
        <BackgroundTop {...BackgroundService2}>
            <h1 className="title_service">PLANES DE SERVICIO</h1>
            <PanelServiceElement>
                <ServicePlans {...Servicio1}></ServicePlans>
                <ServicePlans {...Servicio2}></ServicePlans>
            </PanelServiceElement>
        </BackgroundTop>
        </ContainerBackgroundTop>
        <ContainerBackgroundBody>
            <PanelServiceElement>
                <ServicePlans {...Servicio3}></ServicePlans>
                <ServicePlans {...Servicio4}></ServicePlans>
            </PanelServiceElement>
        </ContainerBackgroundBody>
        <ContainerBackgroundBotton>
        <BackgroundTop  {...BackgroundService3}>
            <PanelServiceElementCenter>
                <ServicePlans {...Servicio5}></ServicePlans>
            </PanelServiceElementCenter>
        </BackgroundTop>
        </ContainerBackgroundBotton>
        </>
    )
}

export default PanelService

