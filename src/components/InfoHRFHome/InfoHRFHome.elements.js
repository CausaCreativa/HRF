import styled from 'styled-components'


export const InfoHome= styled.div`
    display: flex;
    position: relative;
    width: 100%;
    color: #000;
    top: 65px;
    

`;

export const HeroSvg =styled.div`
display: flex;
position:absolute;
z-index: -10;
top:-150px;
background-image:url(${props => props.vector});
background-position: center;
background-repeat: no-repeat;
background-size: 100% ;
width: 100%;
height: 110%;
`;

export const HomeLeft =styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 50%;

`;

export const ContainerVideo = styled.div`
display: flex;
width:750px;
height: min-content;
margin-left: 10%;
margin-top: 5%;

`;

export const HomeRight =styled.div`
display: flex;
justify-content: center;
width: 50%;
`
export const ContainerText = styled.div`
display: flex;
width: 70%;
font-family:'Hind';
font-size: 1.5rem;
color: black;
margin-top: 45%;
`;

export const  ButtomHome = styled.button`
margin-left: -100px;
position: relative;
top: 90px;


`;

