import styled from 'styled-components'
import logo from "../../utils/home.jpg";
export  const ContainerContact  = styled.nav`
background:#000;
color:white;
display: grid;
flex-direction:row;
align-items: center;
.about-us{
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-end;
    background: url(${logo})no-repeat;
    background-size: cover;
}
.contact{
    textarea {
        resize: none;
    }
    .title{
        width: 100%;
        margin: 36px 12px;
        justify-content: flex-start;
        display: flex;
    }
    .contact_img{
        width:  500px;
    }
    .right{
        width: 50%;
    }
    .left{
        width: 50%;
        .form{
            width: 100%;
            margin: 19px 0px;
            padding: 12px 95px;
            .full{
                width:100%;
            }
            .form-input{
                margin: 10px 0px;
                border-radius: 15px;
                padding: 10px;
            }
            .button{
                border-radius: 15px;
                background-color: #0088eb;
                padding: 5px 30px;
                color: #fff;
            }
        }
    }
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-end;
    background-size: cover;
}
.location{
    background-color: #fff !important;
    border:0;
    .icon-panel{
        margin: 28px 0PX;
        width: 100%;
        display: flex;
        justify-content: center;
        color:#000!important;
        text-align: center;
    }
    .content-icon{
        margin: 12px 20px;
    }
    .icon{
        height: 160px;
        width: 160px;
    }
    .background-icon{
        background-color: #E9F0F1;
        border-radius: 50%;
    }
    .iframe-content{
        margin: 27px 0PX;
        width: 100%;
        display: flex;
        justify-content: center;
        text-align: center;
    }
}

`;