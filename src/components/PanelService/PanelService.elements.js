import styled from 'styled-components'

export const ContainerBackgroundTop = styled.div`
    height: 625px;
    position: relative;
`;
export const ContainerBackgroundBody = styled.div`
height: 447px;
position: relative;
`;
export const ContainerBackgroundBotton = styled.div`
height: 900px;
position: relative;
margin-bottom: 92px;
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
`;

export const PanelServiceElementCenter = styled.div`
justify-content: center;
width: 100%;
display: flex;
flex-direction: row;
margin: 9% 0px;
margin-bottom: 18px;
`;