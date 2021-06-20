import styled from 'styled-components'

export const ContainerTeam=styled.div`
display: flex;
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
position: relative;
flex-direction: ${props => props.imgStart};
width: 100%;
height: auto;
padding: 5% 0;
justify-content: space-around;
border: 2px solid red;
`;

export const CardTeamText = styled.div`
display:flex;
width: 60%;
height: auto;
border: 2px solid red;
justify-content: flex-start;
flex-direction: column;
padding: 10% 12%;
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

${props=>props.desborde}

border: 2px solid green;
border-radius: 100%;
background-color: #0C4F9C;
`;


