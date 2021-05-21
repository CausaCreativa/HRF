import styled from 'styled-components';
import logo from "../../utils/image/home.jpg";
export const HomeSectionElement = styled.div`
background: url(${logo})no-repeat;
background-image:url(${require('../../utils/image/Svg_Home_1.svg').default});
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
        margin-left: 37%;
    }
}

height: 400px;
display: flex;
flex-wrap: wrap;
align-content: flex-end;

background-size: cover;
`;