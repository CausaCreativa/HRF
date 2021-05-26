import  {createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Roboto.woff';
import SecondaryFont from './utils/fonts/Spectral-Light.woff';
import Third  from './utils/fonts/Hind-Light.woff'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}

@font-face {
        font-family:'Roboto';
        src: local('Roboto'), local('Roboto'), url(${PrimaryFont}) format('woff');
        font-style:normal;
    }
    @font-face {
        font-family:'Spectral';
        src: local('Spectral'), url(${SecondaryFont}) format('woff');
        font-style:normal;
    }
    @font-face {
        font-family:'Hind';
        src: local('Hind'), url(${Third}) format('woff');
        font-style:normal;
    }
    .button{
        border-radius: 15px;
        background-color: #0088eb;
        padding: 2px 30px;
        color: #fff;
        font-size: 27px;
        margin-left: 61%;
    }

    .title_service{
        width: 100%;
        margin: 25px 12px;
        justify-content: center;
        display: flex;
    }
`;


export const Container = styled.div`
z-index:1;
width:100%;
max-width: width 1300px;
margin-right:auto;
margin-left:auto;
padding-right:50px;
padding-left:50px;
@media screen and (max-width:990px){
    padding-left:30px;
    padding-right:30px;
}
`;