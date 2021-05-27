import styled from 'styled-components'

export const PanelTitle = styled.div`
margin: 68px 8%;
display: flex;
justify-content: flex-end;
align-items: center;
color: #003875;
`;
export const Title = styled.h1`
margin-bottom: 0px;
font-size: 60px;
`;
export const ContainerPanelLocation = styled.div`
height: 191vh;
position: relative;
`;
export const PanelLocationBackground = styled.div`
background-image:url(${ props => props.Background});
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;
width: 100%;
height: 100%;
position: absolute;
`;
export const IconPanel = styled.div`
    margin:80px 0px 273px;
    width: 100%;
    display: flex;
    justify-content: center;
    color:#000!important;
    text-align: center;
`;
export const IframeContent = styled.div`
    margin: 27px 0PX;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`;
