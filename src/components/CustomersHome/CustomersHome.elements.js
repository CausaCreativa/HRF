import styled from 'styled-components'

export const CustomersHomeElements = styled.div`
display: flex;
position: relative;
margin-top: 365px;
width: 100%;
height:auto ;
flex-direction: column;

`;
export const HeroSvg =styled.div`
display: flex;
position:absolute;
z-index: -100;
background-image:url(${props => props.vector});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
width: 100%;
height: 100%;
`;

export const ContainerTitle =styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-end;
margin-top: 5%;

`;

export const Title =styled.h1`
font-family: 'Roboto';
font-size: 90px;
color: white;
margin-right: 7%;
`;

export const Subtitle = styled.h4`
color: white;
font-family: 'Roboto';
font-size:40px;
font-weight: 600;
text-align: right;
margin-right: 7%;
`;

export const ContianerSlider =styled.div`
margin:5% 0;
width: 100%;
`;

export const ContainerImage = styled.div`
display: flex;
width: 820px;
height: auto;
clip-path: polygon(0 0, 100% 0, 81% 100%, 0% 100%);
position: relative;
`;
export const ImageBg = styled.div`
display: flex;
width: 810px;
height: 420px;
clip-path: polygon(0 0, 100% 0, 87% 100%, 0% 100%);
position: absolute;
background-color: white;
z-index: -10;
top:45%;

`;

export const SliderContainer = styled.div`
width: 100%;
height: 290px;
border: 2px solid red;
position:absolute;
z-index: -100;
top: 50%;
`;
