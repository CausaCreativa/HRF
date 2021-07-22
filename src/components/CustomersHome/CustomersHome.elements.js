import styled, {keyframes} from 'styled-components'

/* Animations*/
export const slidein =keyframes`
from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const fadein = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CustomersHomeElements = styled.div`
display: flex;
position: relative;
width: 100%;
height:min-content ;
flex-direction: column;
@media screen and (min-width:320px) and (max-width:700px){
  padding-bottom: 230px;
}
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
@media screen and (min-width:320px) and (max-width:500px){
  margin-top: 5%;
  justify-content: center;
}
`;


export const Title =styled.h1`
font-family: 'Roboto';
font-size: 90px;
color: #f2f2f2;
margin-right: 7%;
@media screen and (min-width:320px) and (max-width:500px){
  margin: auto;
  font-size: 40px;
}
`;

export const Subtitle = styled.h4`
color: white;
font-family: 'Roboto';
font-size:40px;
font-weight: 600;
text-align: right;
margin-right: 7%;
@media screen and (min-width:320px) and (max-width:500px){
  margin: auto;
  margin-top: 5%;
  font-size: 20px;
  text-align: center;
}
`;

export const ContianerSlider =styled.div`

margin:5% 0;
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

`;

export const ContainerImage = styled.div`
display: flex;
width: 820px;
height: auto;
clip-path: polygon(0 0, 100% 0, 81% 100%, 0% 100%);
position: relative;
image-resolution: inherit;
object-fit: contain;
position: relative;
top: 50%;

border: 1px solid red;
 & img{
   width: 100%;
   height: 100%;
 }

@media screen and (min-width:320px) and (max-width:500px){
  display: none;
}
@media screen and (min-width:501px) and (max-width:900px){
  width: 60%;
}
@media screen and (min-width:901px) and (max-width:1024px){
  width: 60%;
}
@media screen and (min-width:1025px) and (max-width:1440px){
  width: 65%;
}

`;
export const ImageBg = styled.div`
display: flex;
width: 810px;
height: auto;
clip-path: polygon(0 0, 100% 0, 87% 100%, 0% 100%);
position: absolute;
background-color: white;
z-index: -10;
top:50%;
`;


export const SliderContainer = styled.div`
width: 100%;
height: 250px;
position:absolute;
z-index: -100;
top: 50%;
right: 0%;
justify-content: center;
display: flex;
background-color: #fff;
overflow: hidden;
@media screen and (min-width:320px) and (max-width:500px){
  height: 100px;
}

`;

export const Slider = styled.div`
display: flex;
width: 100%;
box-sizing: content-box;
animation: ${slidein} 35s linear infinite;
white-space: nowrap;
`;

export const IconsC = styled.div`
width: 100%;
display:flex;
height: 100%;
margin: 0px 0;
justify-content: center;
align-items: center;
@media screen and (min-width:320px) and (max-width:500px){
  width: 180%
}

`;

export const LogoContainer =styled.div`
position: relative;
width: 400px;
height: 200px;
margin: 25px;
animation: ${fadein} 0.5s cubic-bezier( 0.455, 0.03, 0.515, 0.955) forwards ;
background-image: url(${props =>props.iconos});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`;



