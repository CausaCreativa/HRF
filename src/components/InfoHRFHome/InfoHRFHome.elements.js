import styled from 'styled-components'


export const InfoHome= styled.div`
    display: grid;
    position: relative;
    width: 100%;
    color: #000;
    height: min-content;
    top:-4px;
    grid-template-columns: 1fr 1fr;
    @media screen and  (min-width:375px) and (max-width:425px){
    grid-template-columns: 1fr;
    grid-template-rows:  300px;
}
@media screen and  (min-width:426px) and (max-width:768px){
    grid-template-columns: 1fr;
    grid-template-rows:  500px;
}
`;

export const HeroSvg =styled.div`
display: flex;
position:absolute;
z-index: -10;
background-image:url(${props => props.vector});
background-position: top;
background-repeat: no-repeat;
background-size:100%;
background-attachment: local;
width: 100%;
height: 100%;
`;

export const HomeLeft =styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;

@media screen and (max-width:500px){
    margin-left:0 ;
    justify-content: none;
}
`;

export const ContainerVideo = styled.div`
position: relative;
display: flex;
width:950px;
height: min-content;
justify-content: center;
top:20%;
@media screen and  (min-width:375px) and (max-width:425px){
    width:350px;
    
}
@media screen and  (min-width:426px) and (max-width:767px){
    width:350px;
}
@media screen and  (min-width:768px) and (max-width:1020px){
    
    width:550px;
}
@media screen and  (min-width:1021px) and (max-width:1420px){
    width:450px;
}
@media screen and  (min-width:1426px) and (max-width:1920px){
    top:15%;
    width:750px;
}


`;

export const HomeRight =styled.div`
display: flex;
justify-content: center;
width: 100%;

`
export const ContainerText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
font-family:'Hind';
font-size: 1.5rem;
color: black;
margin-top: 70%;
text-decoration: none   ;
@media screen and  (min-width:325px) and (max-width:768px){
    margin:20% 10%;
    text-align: justify;

}

`;

export const  ButtomHome = styled.button`
display: flex;
position: relative;
justify-content: center;
justify-self: center;
`;

export const ButtonMobile= styled.div`
display: none;
border: 1px solid red;
width: 100%;
height: auto;
justify-content: center;
margin: 35px 0;
@media screen and (min-width:325px) and (max-width:800px){
display: flex;
}

`;

