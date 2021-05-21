import styled from 'styled-components'

export  const ContainerHome  = styled.nav`
color:white;
display: grid;
flex-direction:row;
align-items: center;
`;

export const homeObjOne = {
    title:"SOMOS HRF",text:"Para HRF lo mas importante eres tu... "
    };

    export const heroHome = {
        Hero: require('../../utils/images/heroImage.jpg').default,
        alt:'Hero team image',
        banner: 'Para HRF lo más importante eres tu... ',
        heroSvg: require('../../utils/images/Svg_Home_1.svg').default,
        title: 'SOMOS HRF'
    };
