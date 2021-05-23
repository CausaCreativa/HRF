import styled from 'styled-components'

export const InfoHRFHomeElements = styled.div`
background-image:url(${require('../../utils/images/Svg_Home_2.svg').default});
background-size: cover;
height: 1000px;;
color: #000;
.contactUs{
    display: flex;
    padding: 0px 100px;
    height: 100%;
    align-items: flex-end;
    .right{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        align-content: center;
        p{
            padding: 0px 122px;
            font-family: 'Roboto';
        }
    }
    .left{
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    img{
        width: 752px;
        margin-top: 40px;
    }
    div{
        width: 50%;
        height: 100%;
    }
    .div_button{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        align-content: center;
    }
}
`
export const background = {
    Home2: require('../../utils/images/Svg_Home_2.svg').default,
};