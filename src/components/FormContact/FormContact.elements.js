
import styled from 'styled-components'

export const FormContactElements = styled.div`
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
`