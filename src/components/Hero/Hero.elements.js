import styled from 'styled-components'




export const HeroContainer = styled.div`
display:flex;
position: relative;
flex-direction:column;
justify-content:center;
height:${props => props.viewHeight}vh;
width:100%;
background-color:#f0d1f0;

`;
/* banner on section right */
export const HeroBanner =styled.div`
position:absolute;
bottom:0px ;
align-self:flex-end;
justify-content:flex-end;
width:50%;
height:60px;
font-family:'Roboto';
font-size:50px;
letter-spacing:2px;
line-height:45px;
color:#fff;
font-weight:400;
@media screen and (min-width:320px) and (max-width:425px){

height: 75px;
 font-size: 14px;
 letter-spacing:1px;
 line-height:28px;
 bottom: -10%;
 margin-left: 0;
}



 @media screen and (min-width:426px) and (max-width:768px){
     width: 60%;
    height: 80px;
     font-size: 22px;
     letter-spacing:1px;
     line-height:30px;
    bottom: -5%;
 }
`;

/* banner on section left */
export const HeroTitle =styled.div`
position:absolute;
bottom:20%;
margin-left: 8%;
padding-top: 2%;
align-self:flex-start;
justify-content:flex-start;
width:20%;
height:160px;
font-family:'Roboto';
font-size:95px;
letter-spacing:2px;
line-height:80px;
text-align: center;
color:#fff;
font-weight:400;
@media screen and (min-width:320px) and (max-width:399px){
     font-size: 18px;
     letter-spacing:0.5px;
     line-height:30px;
     bottom:-18%;
     border: 1px solid red;
 }
 @media screen and (min-width:400px) and (max-width:425px){
     font-size: 26px;
     letter-spacing:1px;
     line-height:35px;
     bottom:-14%;
     margin-left:6%;
     
     border: 1px solid blue ;
 }

 @media screen and (min-width:426px) and (max-width:768px){
     bottom: 2%;
     font-size: 40px;
     line-height: 50px;
 }
 @media screen and (min-width:769px) and (max-width:1440px){
     font-size: 60px;
     bottom: 5%;
 }

`;

/* banner on section home container SVG image */
export const HeroSvg =styled.div`
position:absolute;
background-image:url(${props => props.vector});
background-position:bottom;
background-repeat: no-repeat;
background-size:contain;
width: 100%;
height: 100%;
color:#fff;
`;

export const HeroImage =styled.div`
width:100%;
height:100%;
background-image:url(${ props => props.hero});
background-size:cover;
background-repeat: no-repeat;
background-position:center center;

`;