import React from 'react'
import {PanelServiceElement,PanelServiceElementCenter} from './PanelService.elements'
import { Servicio1,Servicio2,Servicio3,Servicio4,Servicio5} from "../../pages/ServicePage/DataService"
import {ServicePlans}  from "../../components"


const PanelService = () => {
    return (
        <>
        <PanelServiceElement>
            <ServicePlans {...Servicio1}></ServicePlans>
            <ServicePlans {...Servicio2}></ServicePlans>
        </PanelServiceElement>
        <PanelServiceElement>
            <ServicePlans {...Servicio3}></ServicePlans>
            <ServicePlans {...Servicio4}></ServicePlans>
        </PanelServiceElement>
        <PanelServiceElementCenter>
            <ServicePlans {...Servicio5}></ServicePlans>
        </PanelServiceElementCenter>
        </>
    )
}

export default PanelService

