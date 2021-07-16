import styled from 'styled-components'

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: flex-start;
background-image: url(${props => props.Background});
background-position:top;
background-repeat: no-repeat;
background-size: contain;
background-attachment: local;
width: 100%;
height:  min-content;
flex-direction: column;
    background-size: cover;
    object-fit: cover;
`;

export const  TitleContainer=styled.div`
font-family: 'Roboto';
margin-left: 5%;
    & h1{
        color: white;
        font-size: 60px;
    }
`;

export const ContentAbout = styled.div`
position: relative;
display: grid;
width: 80%;
height: min-content;
align-self: center;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, auto );
margin-top: 5%;
    &  img{
        margin-top: 2%;
        border: 1px solid red;
        width: 60%;
        height: auto;
        justify-self:center;
        z-index: 10;
    }
`;

export const TextAbout= styled.div`
display: flex;
position: relative;
bottom: 20%;
z-index: 1;
width: 70%;
height: min-content;
background: linear-gradient(180deg, #0E55A5 0%, #124489 70.83%, #124489 70.84%, #133D7D 100%);
box-shadow: 0px 4.18559px 20.928px rgba(0, 0, 0, 0.3);
justify-self: flex-end;
    & p {
        font-family: 'Hind';
        color: white;
        margin-top: 9%;
        padding: 12% 5% ;
        font-size: 22px;

    }
`;


