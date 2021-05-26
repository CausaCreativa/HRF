import styled from 'styled-components'

export const InfoHome= styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 1000px;
    color: #000;
    top: 55px;

`;

export const HeroSvg =styled.div`
display: flex;
position:absolute;
top:-35px;
background-image:url(${props => props.vector});
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;
width: 100%;
height: 100%;
`;

export const HomeLeft =styled.div`
display: flex;
width: 50%;
height: 100%;
`;

export const HomeRight =styled.div`
display: flex;
width: 50%;
height: 100%;
`
