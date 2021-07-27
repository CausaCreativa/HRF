
import styled from 'styled-components'

export const ContainerPanelForm = styled.div`
width: 100%;
height: min-content;
position: relative;
/* @media screen and (max-width: 2350px){
    height:192vh;
}
@media screen and (max-width: 2150px){
    height:176vh;
}
@media screen and (max-width: 1950px){
    height:159vh;
}
@media screen and (max-width: 1900px){
    height:155vh;
}
@media screen and (max-width: 1741px){
    height:142vh;
}
@media screen and (max-width: 1600px){
    height:131vh;
}
@media screen and (max-width: 1440px){
    height:118vh;
}
@media screen and (max-width: 1300px){
    height:106vh;
}
@media screen and (max-width: 1150px){
    height:94vh;
}
@media screen and (max-width: 1050px){
    height:84vh;
}
@media screen and (max-width: 768px){
    height:63vh;
}
@media screen and (max-width: 650px){
    height:52vh;
}
@media screen and (max-width: 600px){
    height:49vh;
}
@media screen and (max-width: 550px){
    height:43vh;
}
@media screen and (max-width: 480px){
    height:37vh;
    margin-bottom: 346px;
}
@media screen and (max-width: 425px){
    height:35vh;
    margin-bottom: 346px;
}
@media screen and (max-width: 399px){
    height:32vh;
    margin-bottom: 391px;
}
@media screen and (max-width: 375px){
    height:29vh;
    margin-bottom: 391px;
}
@media screen and (max-width: 320px){
    height:27vh;
    margin-bottom: 454px;
}
@media screen and (max-width: 294px){
    height:23vh;
    margin-bottom: 454px;
} */
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
    font-size: 18px;
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
        padding: 49px 50px;
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