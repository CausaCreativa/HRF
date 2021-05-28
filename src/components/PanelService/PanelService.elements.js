import styled from 'styled-components'

export const ContainerBackgroundTop = styled.div`
    height: 625px;
    position: relative;
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
export const ContainerBackgroundBody = styled.div`
height: 447px;
position: relative;
@media screen and (max-width: 1400px){
    height: 269px;
}
@media screen and (max-width: 900px){
    height: 193px;
}
@media screen and (max-width: 480px){
    height: 119px;
}
`;
export const ContainerBackgroundBotton = styled.div`
height: 900px;
position: relative;
margin-bottom: 92px;
@media screen and (max-width: 1400px){
    height: 588px;
}

@media screen and (max-width: 900px){
    height: 426px;
}
@media screen and (max-width: 480px){
height: 224px;
}
@media screen and (max-width: 415px){
    height: 192px
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

export const PanelServiceElement = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin: 3% 0%;
@media screen and (max-width: 1400px){
    margin: 1% 0%;
}
@media screen and (max-width: 900px){
    margin: 0% 0%;
}
`;

export const PanelServiceElementCenter = styled.div`
justify-content: center;
width: 100%;
display: flex;
flex-direction: row;
margin: 9% 0px;
margin-bottom: 18px;
`;