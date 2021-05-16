import  {createGlobalStyle} from 'styled-components'



export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
}
.panel{
    width: 100%;
}
.button{
    border-radius: 15px;
    background-color: #0088eb;
    padding: 5px 30px;
    color: #fff;
    margin-top: 12px;
}
`;