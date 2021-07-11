import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 800px;
position: relative;
border: 2px solid red;
`;

export const BackgroundTop = styled.div`
    display: flex;
    background-image:url(${ props => props.Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
    width: 100%;
    height: 100%;
`;