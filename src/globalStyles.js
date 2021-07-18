import   styled,{createGlobalStyle} from 'styled-components'
import PrimaryFont from './utils/fonts/Roboto.woff';
import SecondaryFont from './utils/fonts/Spectral-Light.woff';
import Third  from './utils/fonts/Hind-Light.woff';
import PlayFont from  './utils/fonts/PlayfairDisplaySC-Regular.ttf';

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
    @font-face {
        font-family: 'Play';
        src: local('Play'),url(${PlayFont}) format('ttf');
        font-style: normal;
    }
    .button{
        border-radius: 15px;
        background-color: #0088eb;
        padding: 2px 30px;
        color: #fff;
        font-size: 2.5rem ;
        font-family: 'hind';
        font-weight: 100;
        cursor: pointer;
         @media screen and (max-width: 768px){
            font-size: 1.5rem;
         }
         @media screen and (max-width: 425px){
            font-size: 2.5rem ;
         }
    }

    .title_service{
        margin: 17px 12px;
        justify-content: center;
        display: flex;
        color: #fff;
        @media screen and (max-width: 1400px){
            font-size: 27px;
            margin: 7px 0px;
        }
        @media screen and (max-width: 900px){
            font-size: 22px;
            margin: 3px 0px;
        }
        @media screen and (max-width: 480px){
            font-size: 13px;
            margin: 0px 0px;
        }
    }
    .span_service50{
        width: 50%;
        margin: 9px 103px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 768px){
            margin: 9px 66px;
        }
    }
    .span_service100{
        width: 100%;
        margin: 10px 37%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999999999999;
      }
      .display-block {
        display: block;
      }
      
      .display-none {
        display: none;
      }
      iframe{
        @media screen and (max-width: 1440px){
           height: 800px;
            width: 800px; 
        }
        @media screen and (max-width: 1024px){
            height: 500px;
            width: 800px;
        }
        @media screen and (max-width: 768px){
            height: 400px;
            width: 600px;
        }
        @media screen and (max-width: 425px){
            height: 400px;
            width: 600px;
        }
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
#adn{
    background-color: aliceblue;
    border: 1px solid red;
}
`;