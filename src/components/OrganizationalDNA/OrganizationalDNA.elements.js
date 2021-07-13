import styled from 'styled-components'


export const ContainerADN = styled.div`
display: flex;
height: 840px;
width: 100%;
position: relative;
background-image: url(${props => props.BackgroundADN});
background-repeat: no-repeat;
background-size: cover;
background-position:bottom;
justify-content: center;

`;

export const ADNMol = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: 80%;
    height: auto;
    `;