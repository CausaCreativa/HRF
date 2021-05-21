import styled from 'styled-components';
import logo from "../../utils/images/Logo.svg";



export const HomeSectionElement = styled.div`
background: url(${logo})no-repeat;
background-image:url(${require('../../utils/images/Svg_Home_1.svg').default});
img{
    z-index: -999;
    width: 100%;
    height: 100%;
    position: absolute;
}
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
        margin-bottom: 20%;
    }
}

height: 550px;
display: flex;
flex-wrap: wrap;
align-content: flex-end;

background-size: cover;
`;