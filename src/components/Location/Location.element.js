import styled from 'styled-components'

export const PanelTitle = styled.div`
margin: 15% 8%;
display: flex;
justify-content: flex-end;
align-items: center;
color: #003875;
`;

export const Title = styled.h1`
margin-bottom: 0px;
font-size: 60px;
@media screen and (max-width: 425px){
    font-size: 45px;
}
`;
export const ContainerPanelLocation = styled.div`
display: flex;
width: 100%;
height: min-content;
`;
export const PanelLocationBackground = styled.div`
background-image:url(${ props => props.Background});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
`;
export const IconPanel = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-self: center;
    text-align: center;
    border: 1px solid red;
    margin: 0 0 12% 0;

`;
export const IframeContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 10%;
    @media screen and (max-width: 500px){
    margin-bottom: 15%;
}
`;
