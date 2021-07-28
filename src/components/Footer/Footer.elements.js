import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logoFooter from '../../utils/images/LogoFooter.svg'



export const FooterContainer = styled.footer`
background-color:#000;
opacity: 95%;
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
font-weight:1.2rem;
padding-bottom:20px;
`

export const FooterMenu = styled.ul`
width:80%;
display:flex;
justify-content:center;
align-items:center;
list-style:none;
text-align: center;
`;

export const FooterItem = styled.li`
height: 60px;
border-bottom: 2px solid transparent;
&:hover{
    border-bottom:2px solid #0088EB;
}
`;

export const FooterLink = styled(Link)`
font-family:'Spectral';
font-size:28px;
font-weight:100;
color:#fff;
display:flex;
align-items:center;
text-decoration: none;
padding:0.5rem 1rem;
height:100%;
@media screen and (max-width: 500px){
    font-size: 18px;
    padding:  0.5rem 0.5rem;

}
`;

export const Copyrigth = styled.div`
font-size: 1.4rem;
font-family: "Spectral";
text-align: center;
width: auto;
height: auto;
color: white;
@media screen and (max-width: 500px){
   font-size: 1rem;
}
`;

export const ContainerLogo =styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 80px;
@media screen and (max-width: 500px){
    height: 50px;
}
`;

export const LogoFooter = styled.div`
position: absolute;
bottom: 10px;
width: 150px;
height: 150px;
background-image:url(${logoFooter});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
@media screen and (max-width: 500px){
    width: 90px;
    height: 90px;
    bottom: 0px;
}
`;