import styled from 'styled-components'
export  const ContainerService  = styled.nav`
background:#000;
color:white;
display: grid;
flex-direction:row;
align-items: center;
`;

export const HeroService = {
    image: require('../../utils/images/HeroService.jpg').default,
    alt:'Hero service image',
    banner: ' ',
    svg: require('../../utils/images/Svg_Services_1.svg').default,
    title: ''
};