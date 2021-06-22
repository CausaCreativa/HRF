import styled from 'styled-components'


export const ContainerValues=styled.div`
display: flex;
position: relative;
width: 100%;
height: auto;
background-image: url(${props => props.Background});
background-position:bottom;
background-repeat: no-repeat;
background-size:cover;
object-fit: cover;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid red;
`;

export const ContainerTitle = styled.div`
display: flex;
width: 100%;
height: auto;
font-family: 'Spectral';
font-size: 50px;
color: white;
justify-content: flex-start;


        & h1{
            position: relative;
            left: 10%;
            color: White;
        }

`;

export const ContainerLogo = styled.div`
position: absolute;
justify-content: center;
right: 50%;
background-image: url(${props => props.IconValues});

`; 

export const SectionValues =styled.div`
display: flex;
width: 100%;
height: auto;
display: flex;
margin: 5% 0;
position: relative;

`;

export const ValuesIcon= styled.div`
display: flex;
border: 2px solid green ;
position: relative;
width: 160px;
height: auto;
background-image: url(${props => props.IconValues});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
object-fit: contain;
${props=>props.desbordeIcon}
`;

export const ValuesContainer= styled.div`
width: 260px;
height: 260px;
border-radius: 50%;
border: 2px solid blue;
background-image: url(${props => props.ValuesHRF});
background-position: center;
background-repeat: no-repeat;
background-size: auto;
position: relative;
${props=>props.desbordeValues}
`;
