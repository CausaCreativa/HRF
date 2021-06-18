import styled from 'styled-components'

export const ContainerTeam=styled.div`
display: flex;
width: 100%;
height: auto;
border: 2px solid red;
background-image: url(${props => props.Background});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
`;

export const CardTeam = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: auto;
justify-content: space-around;
border: 2px solid red;
`;

export const CardTeamText = styled.div`
display:flex;
width: 48%;
height: auto;
border: 2px solid red;
justify-content: flex-start;

 & h1 {
     color: red;
     padding-left: 50%;
     font-family: 'Play';
 }

`;
