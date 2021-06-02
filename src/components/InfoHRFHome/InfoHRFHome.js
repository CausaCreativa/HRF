import React from 'react'
import {InfoHome,
        HeroSvg,
        HomeLeft,
        HomeRight,
        ContainerVideo,
        ContainerText,
    } from './InfoHRFHome.elements'
import ReactPlayer from 'react-player'


const InfoHRFHome = (
   {vector,
    Src,
    

}
) => {
    return (
        <>
        <InfoHome>
                <HomeLeft>
                    <ContainerVideo>
                        <ReactPlayer
                        url={require('../../utils/videos/video.mp4').default}
                        width='100%'
                        height='100%'
                        controls
                        />
                    </ContainerVideo>
                    <button className="button" to="/contact">
                         - Contactanos -
                    </button>
                </HomeLeft>
                <HomeRight>
                    <ContainerText>
                    Somos una compañía regional, encargada de la prestación de servicios  de carácter, contable, financiero legal y tributario. <br/> HRF Asociados nació en el  Valle de Ubaté en el año 2018, cuando identificamos la necesidad de prestar esta tipología de servicios en la región,  teniendo en cuenta las dinámicas de producción del municipio de Ubaté y sus alrededores.<br/> HRF Asociados es una compañía encargada de la tercerización de procesos internos como  lo son: el outsourcing contable, revisoría fiscal y de consultoría legal y tributaria. Al interior de nuestra organización se encuentran jóvenes profesionales en áreas como el Derecho, Contaduría Pública, Economía y Psicología, que de manera conjunta e interdisciplinar se encargan de diseñar y poner en marcha planes  y estrategias de acción para mejorar y mantener en óptimas condiciones  la operatividad de las empresas de  nuestros clientes.
                    </ContainerText>
                </HomeRight>
                <HeroSvg vector={vector}/>
        </InfoHome>
        </>
    )
}

export default InfoHRFHome
