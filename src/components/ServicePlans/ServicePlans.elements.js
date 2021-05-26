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
`;

export const Text = styled.p`
    border-top: #fff 2px solid;
    padding-top: 18px;
    font-size: 20px;
`;