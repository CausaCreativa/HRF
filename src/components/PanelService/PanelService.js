import React, { Component } from "react";
import {PanelServiceElement,PanelServiceElementCenter,BackgroundTop,ContainerBackgroundTop,ContainerBackgroundBody,ContainerBackgroundBotton} from './PanelService.elements'
import { Servicio1,Servicio2,Servicio3,Servicio4,Servicio5,BackgroundService2,BackgroundService3} from "../../pages/ServicePage/DataService"
import {ServicePlans}  from "../../components"
import Modal from '../Modal/Modal';

class PanelService extends Component {
    constructor() {
        super();
        this.state = {
          show: false,
          data:null
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.title = "";
      }
    
      showModal = function (element) {
        this.setState({ show: true });
        console.log("this",element)
        this.state.data = element.data;
        this.title = element.text;
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
      render() {
        return (
        <>
        <ContainerBackgroundTop>
        <BackgroundTop {...BackgroundService2}>
            <h1 className="title_service">PLANES DE SERVICIO</h1>
            <PanelServiceElement>
                <span className="span_service50" onClick={() =>this.showModal(Servicio1)}>
                <ServicePlans {...Servicio1} ></ServicePlans>
                </span>
                <span className="span_service50" onClick={() =>this.showModal(Servicio2)} >
                <ServicePlans {...Servicio2} ></ServicePlans>
                </span>
            </PanelServiceElement>
        </BackgroundTop>
        </ContainerBackgroundTop>
        <ContainerBackgroundBody>
            <PanelServiceElement>
            <span className="span_service50" onClick={() =>this.showModal(Servicio3)} >
                <ServicePlans {...Servicio3} ></ServicePlans>
                </span>
                <span className="span_service50" onClick={() =>this.showModal(Servicio4)} >
                <ServicePlans {...Servicio4} ></ServicePlans>
                </span>
            </PanelServiceElement>
        </ContainerBackgroundBody>
        <ContainerBackgroundBotton>
        <BackgroundTop  {...BackgroundService3}>
            <PanelServiceElementCenter>
            <span className="span_service100" onClick={() =>this.showModal(Servicio5)} >
                <ServicePlans {...Servicio5} ></ServicePlans>
                </span>
            </PanelServiceElementCenter>
        </BackgroundTop>
        </ContainerBackgroundBotton>
        <Modal show={this.state.show} title={this.title} handleClose={this.hideModal} data={this.state}>
        </Modal>
        </>
    )
        }
}

export default PanelService

