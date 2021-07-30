
import styled from 'styled-components'

export const ContainerPanelForm = styled.div`
width: 100%;
height: min-content;
position: relative;
`;
export const PanelFormBackground = styled.div`
background-image:url(${ props => props.Background});
background-position: top;
background-repeat: no-repeat;
background-size: contain;
object-fit: contain;
height: min-content;
`;

export const PanelCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-end;
    background-size: cover;
`;

export const Title = styled.h1`
width: 100%;
margin: 2% 7% 16% 7%;
justify-content: flex-start;
display: flex;
color: #fff;
font-size: 40px;
@media screen and (max-width: 650px){
    font-size: 23px;
}
@media screen and (max-width: 425px){
    margin-top: -1%;
    font-size: 20px;
}
@media screen and (max-width: 294px){
    font-size: 15px;
}
`;


export const Panel = styled.div`
width: 50%;
@media screen and (max-width: 425px){
    width: 100%;
}
`;

export const Form = styled.div`
    width: 100%;
    margin: 19px 0px;
    padding: 15px 163px;
    @media screen and (max-width: 1900px){
        padding: 15px 92px;
    }
    @media screen and (max-width: 1440px){
        padding: 12px 95px;
    }
    @media screen and (max-width: 768px){
        margin: 16px 0px;
        padding: 2px 48px;
    }
    @media screen and (max-width: 425px){
        padding: 0px 50px;
    }
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