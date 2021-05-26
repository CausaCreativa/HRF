import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`
background-color:#000;
opacity: 90%;
width: 100%;
height: 150px;
display: flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
font-weight:1.2rem;
padding-bottom:25px;
`;

export const FooterMenu = styled.ul`
width:80%;
height: 90px;
display:flex;
justify-content:center;
align-items:center;
list-style:none;
text-align: center;
`;

export const FooterItem = styled.li`
height: 80px;
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
`;