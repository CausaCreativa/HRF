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
@media screen and (max-width: 425px){
    font-size: 45px;
}
`;
export const ContainerPanelLocation = styled.div`
height: 212vh;
position: relative;
@media screen and (max-width: 1440px){
    height:212vh;
}
@media screen and (max-width: 1024px){
    height:165vh;
}
@media screen and (max-width: 768px){
    height:124vh;
}
@media screen and (max-width: 425px){
    height:68vh;
}
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
    @media screen and (max-width: 1440px){
        margin:80px 0px 273px;
    }
    @media screen and (max-width: 1024px){
        margin:13px 0px 185px;
    }
    @media screen and (max-width: 768px){
        margin:0px 0px 70px;
    }
    @media screen and (max-width: 425px){
        margin:0px 0px 33px;
    }
`;
export const IframeContent = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
`;
