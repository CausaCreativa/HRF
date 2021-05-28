import styled from 'styled-components'


export const Plan = styled.div`
    width: 50%;
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
    @media screen and (max-width: 1400px){
        width: 150px;
        height: 150px;
        margin-bottom: 8px;
    }
    @media screen and (max-width: 900px){
        width: 130px;
        height: 130px;
        margin-bottom: 6px;
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
`;