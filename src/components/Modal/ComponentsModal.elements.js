import styled from 'styled-components'

export const ComponentsModalElement = styled.div`
border:1px solid red
`

export const ContentElements = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin: 70px 54px;
`;
export const Image = styled.img`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 20px;
    background-image:url(${ props => props.pic});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;