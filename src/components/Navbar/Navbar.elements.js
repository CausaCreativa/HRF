import styled from 'styled-components'
import logopage from '../../utils/images/Logo.svg'
import {Link} from 'react-router-dom'
import {Container} from '../../globalStyles'




export const Nav = styled.nav`
font-family:'Sriracha';
width:100%;
height: 75px;
display: inline-flex;
justify-content: center;
align-items: center;
font-weight:1.2rem;
top:-8px;
z-index:999;
position:absolute;
`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
align-items: center;
background: linear-gradient(90.09deg, rgba(0, 0, 0, 0) 14.68%, rgba(0, 0, 0, 0.3526) 29.44%, rgba(47, 56, 73, 0.82) 77.39%);
@media screen and (max-width:415px){
background:#101522;
}
${Container}
`;

export const NavLogo = styled(Link)`
color: blue;
justify-self: flex-start;
cursor:pointer;
text-decoration: none;
font-size:2rem;
display: flex;
align-items:flex-start;
margin-top: 67px;
position:absolute;
`;



export  const NavIcon=styled.div`
display:flex;
align-items:center;
width:250px;
height:250px;
background-image:url(${logopage});
background-size: contain;
background-repeat:no-repeat;
object-fit:cover;
margin-top:10px;
margin-right:10px;
color:red;
`



export const  MobileIcon = styled.div`
display:none;
color:red;
@media screen and (max-width: 960px ){
display:block;
position:absolute;
top:0;
right:0;
transform: translate(-100%, 60%);
font-size:1.8rem;
cursor:pointer;
}
`;

export const NavMenu = styled.ul`
display:flex;
width:100%;
justify-content: flex-end;
height: auto;
align-items:center;
list-style:none;
text-align: center;
margin-top: 116px;
@media screen and (max-width: 960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    position:absolute;
    top:65px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity:0.8;
    transition:all 0.5s ease;
    background:#101522;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;
&:hover{
    border-bottom:2px solid #4b59f7;
}
@media screen and (max-width:960px){
    width:100%;
    &:hover{
        border: none;
    }
}
`

export const NavLinks =styled(Link)`
font-family:"Roboto";
font-size:25px;
font-weight:700;
color:#fff;
display:flex;
align-items:center;
text-decoration: none;
padding:0.5rem 1rem;
height:100%;
@media screen and (max-width:960px){
    color:#fff;
    text-align:center;
    padding:3rem;
    width:100%;
    display:table;
    &:hover{
        color:#4b59f7;
        transition:all 0.3seg ease;
    }
}`


export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`;

