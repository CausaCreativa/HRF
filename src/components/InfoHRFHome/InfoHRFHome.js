import React from 'react'
import {InfoHome,
        HeroSvg,
        HomeLeft,
        HomeRight,
        ContainerVideo,
        ContainerText,
        ButtomHome,
        ButtonMobile
    } from './InfoHRFHome.elements'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'


const InfoHRFHome = (
    {vector}
) => {
    return (
        <>
        <InfoHome >
            <HeroSvg vector={vector}/>
                <HomeLeft>
                    <ContainerVideo>
                        <ReactPlayer
                        url={require('../../utils/videos/video.mp4').default}
                        width='80%'
                        height='100%'
                        controls
                        />
                    </ContainerVideo>
                    <Link to="/contact">
                        <ButtomHome className="button" to="/contact">- Contactanos -</ButtomHome>
                    </Link>
                </HomeLeft>
                <HomeRight>
                    <ContainerText>
                    HRF ASOCIADOS se constituyó en la ciudad de Bogotá D.C., con la unión de capital, trabajo, experiencia y esfuerzos de los socios Hernández, Rodríguez y Forero, esta sociedad se conformó para brindar soluciones en los ámbitos contables, financieros y legales, inicialmente a nivel nacional y con la visión de expansión a nivel internacional, buscando alianzas y haciendo aplicación del trabajo colaborativo.<br/> 
                    <ButtonMobile>
                    <Link to="/services">
                        <ButtomHome className="button" to="/contact">- Servcios -</ButtomHome>
                    </Link>
                    </ButtonMobile>
                    Nuestra compañía es especializada en la prestación de servicios de manera independiente, responsable e integra, buscando cumplir con las expectativas de nuestros clientes, mediante el asesoramiento de nuestro equipo de trabajo multidisciplinario, el cual tiene enfoque en diferentes áreas como; Outsourcing Contable, Revisoría Fiscal, Consultoría Legal y Tributaria, aseguramiento y, defensa jurídica en temas civiles, laborales, comerciales, administrativos y disciplinarios relacionados con la profesión Contable.
                    </ContainerText>
                </HomeRight>
        </InfoHome>
        </>
    )
}

export default InfoHRFHome
