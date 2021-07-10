import styled from 'styled-components'


export const ContainerValues = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .ii {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url(${(props) => props.Background});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
  }
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
            left: 40%;
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
margin: 2% 0;
position: relative;

`;

export const ValuesIcon= styled.div`
display: flex;

position: absolute;
width: 160px;
height: 160px;
background-image: url(${props => props.IconValues});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
object-fit: contain;
top:70%;
${props=>props.desbordeIcon}
`;

export const ValuesContainer= styled.div`
width: 260px;
height: 260px;
border-radius: 50%;
border: 0.5px solid blue;
background-image: url(${props => props.ValuesHRF});
background-position: center;
background-repeat: no-repeat;
background-size: auto;
position: relative;
${props=>props.desbordeValues}

`;
