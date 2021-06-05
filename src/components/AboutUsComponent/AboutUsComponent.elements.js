import styled from 'styled-components'
export const Container = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
width: 100%;
`;
export const ContentImage = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
margin-top: 190px;
`;

export const Image = styled.img`
background-image:url(${ props => props.pic});
width: 800px;
    height: 600px;
background-size:cover;
background-repeat: no-repeat;
object-fit:contain;
background-position:center;
`;

export const ContentText = styled.div`
    color: #fff;
    background-color: #57DBD3;
    width: 450px;
    height: 220px;
    display: flex;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    box-shadow:3px 4px 0px #9e9e9e, 0 0 1em #9e9e9e, 0 0 0.2em #9e9e9e;
    bottom: 13vh;
    position: relative;
    left: 42vh;
    border: 14px solid #fff;

`;
export const Text = styled.p`

`;
export const ContentText2 = styled.div`
    color: #fff;
    background-color: #0c4990;
    width: 900px;
    height: 75vh;
    display: flex;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    bottom: 44vh;
    position: relative;
    left: 6vh;
    padding: 40px;
    z-index: -999;
`;
export const Text2 = styled.p`

`;
export const Title = styled.h1`
    color: white;
    margin-left: 50px;
`

export const ContainerBackgroundTop = styled.div`

height: 625px;
position: relative;
@media screen and (max-width: 1900px){
    height: 540px
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