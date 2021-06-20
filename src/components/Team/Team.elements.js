import styled from 'styled-components'

export const ContainerTeam=styled.div`
display: flex;
position: relative;
overflow: hidden;
width: 100%;
height: auto;
background-image: url(${props => props.Background});
background-position:bottom;
background-repeat: no-repeat;
background-size:contain;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ContainerTitle = styled.div`
display: flex;
width: 100%;
height: auto;
font-family: 'Spectral';
font-size: 50px;
color: white;
justify-content: flex-end;


        & h1{
            margin-right: 10%;
            color: #0C4F9C;
        }

`;

export const CardTeam = styled.div`
display: flex;
flex-direction: ${props => props.imgStart};
width: 100%;
height: auto;
padding: 2% 0;
border: 2px solid red;
`;

export const CardTeamText = styled.div`
display:flex;
width: 70%;
height: auto;
border: 2px solid red;
justify-content: flex-start;
flex-direction: column;
margin: 0;
padding: 9% 8%;
    & h2 {
        font-size: 40px;
        padding-top:40px;
        font-family: 'Play';
        }
    & h4 {
        font-size: 30px;
        padding-top:20px;
        font-family: 'Roboto';
        }
    & p {
        padding-top: 20px;
        font-family: 'Hind';
        font-size: 25px;
        font-weight: 100;
    }
`;

export const ContainerIcon= styled.div`
display: flex;
width: 40%;
height: 100%;
padding: 20px 0;
justify-content: space-between;
`;
export const IconImg = styled.img`
src: url('${props =>props.Icon}');
width: 50px;

`;

export const CardImage = styled.div`
display: flex;
position: relative;
width: 50%;
background-image: url(${props=>props.back});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
${props=>props.desborde}
border: 2px solid green;
`;

export const ContainerPhoto =styled.div`
display: flex;
position: absolute;
width: 60%;
height: auto;
background-image: url(${props=>props.photo});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
border: 2px solid green;
${props=>props.desborde}
`;


