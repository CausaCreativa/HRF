import React from "react";
import { ContainerService } from "./DataService"
const Service = () => {
return (
    <>
    <ContainerService>
    <div class="panel service"></div>
    <div class="service_plans">
        <h1 class="title">PLANES DE SERVICIO</h1>
        <div class="panel">
            <div class="plan">
                <img class="image_plan" src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                <p class="text_plan">ASESORIA Y CONSULTORIA EN CONTABILIDAD, FINANZAS Y TRIBUTARIA</p>
            </div>
            <div class="plan">
                <img class="image_plan" src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                <p class="text_plan">REVISORÍA FISCAL Y ASEGURAMIENTO</p>
            </div>
        </div>
        <div class="panel">
            <div class="plan">
                <img class="image_plan" src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                <p class="text_plan">GESTIÓN JURÍDICA Y REPRESENTACIÓN LEGAL</p>
            </div>
            <div class="plan">
                <img class="image_plan" src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                <p class="text_plan">ASESORÍA Y CONSULTORIA LEGAL Y CONTRACTUAL</p>
            </div>
        </div>
        <div class="panel center">
            <div class="plan">
                <img class="image_plan" src="https://www.officein.com.co/wp-content/uploads/2019/02/Conoce-como-se-mueve-el-mercado-de-las-oficinas-en-Bogota.jpg"></img>
                <p class="text_plan">ASESORÍA EN PROCESOS DE FISCALIZACIÓN Y AUDITORÍA</p>
            </div>
        </div>
        <h1 class="text_button">Trabaja con nosotros</h1>
    </div>
    </ContainerService>
    </>
);
};

export default Service;
