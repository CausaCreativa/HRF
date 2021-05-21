import styled from 'styled-components'


export const InfoHRFHomeElements = styled.div`
background-image:url(${props => props.DataImage});
.contactUs{
    padding:100px;
    display: flex;
    .right{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        align-content: center;
    }
    .left{
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    img{
        width: 400px;
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
    Home2: require('../../utils/image/Svg Home 2.svg').default,
};