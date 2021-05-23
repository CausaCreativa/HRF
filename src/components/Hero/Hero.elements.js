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
font-size:40px;
letter-spacing:2px;
line-height:45px;
color:#fff;
font-weight:400;
`;

/* banner on section left */
export const HeroTitle =styled.div`
position:absolute;
bottom:180px;
margin-left: 8%;
padding-top: 2%;
align-self:flex-start;
justify-content:flex-start;
width:20%;
height:160px;
font-family:'Roboto';
font-size:75px;
letter-spacing:2px;
line-height:80px;
text-align: center;
color:#fff;
font-weight:400;

`;

/* banner on section home container SVG image */
export const HeroSvg =styled.div`
position:absolute;
top:125px;
background-image:url(${props => props.vector});
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;
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
object-fit:contain;
background-position:center;
`;