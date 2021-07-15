import styled from 'styled-components'


export const Plan = styled.div`
    
    padding: 0px 15%;
    text-align: center;
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin-bottom: 18px;
    background-image:url(${ props => props.pic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 1440px){
        width: 160px;
        height: 160px;
        margin-bottom: 8px;
    }
    @media screen and (max-width: 1024px){
        width: 130px;
        height: 130px;
        margin-bottom: 6px;
    }
    @media screen and (max-width: 768px){
        width: 70px;
        height: 70px;
        margin-bottom: 4px;
    }
    @media screen and (max-width: 425px){
        width: 65px;
        height: 65px;
        margin-bottom: 4px;
    }
`;

export const Text= styled.p`
    border-top: #${props => props.color} 2px solid;
    padding-top: 18px;
    font-size: 20px;
    color: #${props => props.color};
    @media screen and (max-width: 1400px){
        padding-top: 10px;
        font-size: 14px;
    }
    @media screen and (max-width: 900px){
        padding-top: 8px;
        font-size: 12px;
    }
    @media screen and (max-width: 480px){
        padding-top: 3px;
        font-size: 7px;
        border-top: #${props => props.color} 1px solid;
    }
    @media screen and (max-width: 460px){
        padding-top: 2px;
        font-size: 5px;
        border-top: #${props => props.color} 1px solid;
    }
`;