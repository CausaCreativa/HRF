import styled from 'styled-components'

export const ContentIcon = styled.div`
    margin: 12px 20px;
    @media screen and (max-width: 1440px){
        margin: 12px 20px;
    }
    @media screen and (max-width: 1024px){
        margin: 0px 20px;
    }
    @media screen and (max-width: 768px){
        margin: 0px 20px;
    }
    @media screen and (max-width: 425px){
        margin: 0px 20px;
    }
`;
export const Icon = styled.img`
    height: 160px;
    width: 160px;
    @media screen and (max-width: 1440px){
        height: 160px;
        width: 160px;
    }
    @media screen and (max-width: 1024px){
        height: 140px;
        width: 140px;
    }
    @media screen and (max-width: 768px){
        height: 100px;
        width: 100px;
    }
    @media screen and (max-width: 425px){
        height: 50px;
        width: 50px;
    }
`;
export const BackgroundIcon = styled.div`
    background-color: #E9F0F1;
    border-radius: 50%;
`;