import styled from 'styled-components'

export const ContainerPanelLocation = styled.div`
height: 190vh;
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
    margin: 28px 0PX;
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
