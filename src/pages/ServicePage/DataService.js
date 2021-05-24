import styled from 'styled-components'
export  const ContainerService  = styled.nav`
background:#000;
color:white;
display: grid;
flex-direction:row;
align-items: center;
.service_plans{
    .text_button{
        margin: 10%;
    }
    .title{
        width: 100%;
        margin: 36px 12px;
        justify-content: center;
        display: flex;
    }
    .center{
        justify-content: center;
    }
    .panel{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 9% 0px;
        .plan{
            width: 50%;
            padding: 0px 15%;
            text-align: center;
            .image_plan{
                border-radius: 50%;
                width: 250px;
                height: 250px;
                margin-bottom: 18px;
            }
            .text_plan{
                border-top: #fff 2px solid;
                padding-top: 18px;
            }
        }
    }
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-end;
    background-size: cover;
}
`;
export const Title = styled.h1`
    width: 100%;
    margin: 36px 12px;
    justify-content: center;
    display: flex;
`;
export const HeroService = {
    hero: require('../../utils/images/HeroService.jpg').default,
    alt:'Hero service image',
    banner: ' ',
    vector: require('../../utils/images/Svg_Services_1.svg').default,
    title: '',
    viewHeight:84
};

export const Servicio1 = {
    pic: require('../../utils/images/service1.jpg').default,
    text:'ASESORIA Y CONSULTORIA EN CONTABILIDAD, FINANZAS Y TRIBUTARIA'
}
export const Servicio2 = {
    pic: require('../../utils/images/Service2.png').default,
    text:'REVISORÍA FISCAL Y ASEGURAMIENTO'
}
export const Servicio3 = {
    pic: require('../../utils/images/Service3.jpg').default,
    text:'GESTIÓN JURÍDICA Y REPRESENTACIÓN LEGAL'
}
export const Servicio4 = {
    pic: require('../../utils/images/Service4.jpg').default,
    text:'ASESORÍA Y CONSULTORIA LEGAL Y CONTRACTUAL'
}
export const Servicio5 = {
    pic: require('../../utils/images/Service5.jpg').default,
    text:'ASESORÍA EN PROCESOS DE FISCALIZACIÓN Y AUDITORÍA'
}