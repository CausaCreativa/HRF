import styled from 'styled-components'


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 840px;
width: 100%;
height: auto;
position: relative;
border: 2px solid red;
`;

export const BackgroundTop = styled.img`
    display: flex;
    width: 100%;
    height: auto;
    background-position: center;
    background-size: contain;
    object-fit: cover;
    `;