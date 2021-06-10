import styled from 'styled-components'

export const Title = styled.h1`
margin-top: 15vh;
display: flex;
justify-content: flex-end;
margin-right: 38px;
color: white;
font-size: 50px;
`;

export const ContainerBackgroundTop = styled.div`
margin-top: 90vh;
height: 625px;
position: relative;
@media screen and (max-width: 1900px){
    height: 1160px
}
@media screen and (max-width: 1400px){
    height: 488px;
}
@media screen and (max-width: 1300px){
    height: 356px;
}
@media screen and (max-width: 900px){
    height: 313px;
}
@media screen and (max-width: 800px){
    height: 267px;
}
@media screen and (max-width: 480px){
    height: 168px;
}
@media screen and (max-width: 460px){
    height: 144px
}
`;
export const BackgroundTop = styled.div`
background-image:url(${ props => props.Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
`;