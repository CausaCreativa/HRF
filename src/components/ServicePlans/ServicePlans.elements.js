import styled from 'styled-components'

export const ServicePlansElements = styled.div`
border: red solid 1px;
margin-top: 44px;
.service_plans{
    .text_button{
        margin: 10%;
    }
    .title{
        width: 100%;
        margin: 36px 12px;
        justify-content: center;
        display: flex;
    }
    .center{
        justify-content: center;
    }
    .panel{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 9% 0px;
        .plan{
            width: 50%;
            padding: 0px 15%;
            text-align: center;
            .image_plan{
                border-radius: 50%;
                width: 250px;
                height: 250px;
                margin-bottom: 18px;
            }
            .text_plan{
                border-top: #fff 2px solid;
                padding-top: 18px;
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
export const Title = styled.h1`
    width: 100%;
    margin: 36px 12px;
    justify-content: center;
    display: flex;
`;

export const Panel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 9% 0px;
`;