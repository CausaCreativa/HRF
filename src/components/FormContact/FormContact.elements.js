
import styled from 'styled-components'

export const PanelCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-end;
    background-size: cover;
`;

export const Title = styled.h1`
width: 100%;
margin: 36px 12px;
justify-content: flex-start;
display: flex;
`;


export const Panel = styled.div`
width: 50%;
`;

export const Form = styled.div`
    width: 100%;
    margin: 19px 0px;
    padding: 12px 95px;
`;
export const Input = styled.input`
    margin: 10px 0px;
    border-radius: 15px;
    padding: 10px;
    width: 100%;
    color:#3F6998;
`;
export const Textarea = styled.textarea`
    margin: 10px 0px;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    width: 100%;
    color:#3F6998;
`;
export const Button = styled.button`
    margin-left: 0% !important;
    margin-top: 20px;
`;

export const Image = styled.img`
width: 500px;
height: 400px;
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;
    background-image:url(${props => props.formImage});
`;