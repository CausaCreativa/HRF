import styled from 'styled-components';
import logo from "../../utils/home.jpg";
export const HomeSectionElement = styled.div`
.panel{
    .right{
        display: flex;
        justify-content: flex-end;
    }
    .left{
        width: 25%;
    }
    p{
        font-size: 25px;
    }
    h1{
        font-size: 59px;
    }
}

height: 400px;
display: flex;
flex-wrap: wrap;
align-content: flex-end;
background: url(${logo})no-repeat;
background-size: cover;
`;