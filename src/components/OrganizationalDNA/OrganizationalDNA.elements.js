import styled, {keyframes} from 'styled-components'


export const rotar =keyframes`

0%{
    transform:rotate3d(0,1, 0, 0deg) ;
}
50%{
    transform:rotate3d(0,1, 0, 360deg) ;
}

100%{
    transform:rotate3d(0,1, 0, 0deg) ;
}
`;

export const none = keyframes`
0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


export const ContainerADN = styled.div`
display: flex;
height: auto;
width: 100%;
padding-top: 20%;
position: relative;
background-image: url(${props => props.BackgroundADN});
background-repeat: no-repeat;
background-size: cover;
background-position:bottom;
justify-content: flex-end;
`;

export const ADNMol = styled.div`
    display: grid;
    grid-template-columns: 3fr;
    grid-template-rows: repeat(5, 140px);
    width: 80%;
    height: auto;

    align-items: center;
    justify-items: center;
        & div {
            display: flex;
            width: 90%;
            justify-content: center;
        }

        & :first-child{
            width: auto;
            height: auto;
            animation: ${rotar}  25s  ease-in infinite;
            transition: animation 1s;
        &  :nth-child(2){
            height: 200px;



            }
        }

    `;

    export const ADNDescription=styled.div`
    display: grid;
    grid-template-columns: 3fr;
    grid-template-rows: repeat(5, 140px);
    width: 100%;
    height: auto;
    align-items: center;
    justify-self: center;
    & div {
            display: flex;
            width: 50%;
            align-items: center;
            flex-direction: column;
            color:white;
            font-family: 'Hind';
        }
    `;



export const  TitleContainer=styled.div`
position: absolute;
top: 10%;
display: flex;
font-family: 'Roboto';
margin-right: 5%;
    & h1{
        color: white;
        font-size: 60px;
    }
`;








/* animations*/
