import styled from 'styled-components'

export const CustomersHomeEleents = styled.div`
background-image:url(${require('../../utils/images/Svg_Home_3.svg').default});
background-size: cover;
height: 800px;
    display: flex;
    align-items: center;
.customers{
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    .panel-left{
        width: 35%;
    }
    .panel-right{
        width: 65%;
    }
    h1{
        align-items: flex-end;
        text-align: right;
        font-size: 60px;
    }
    p{
        text-align: right;
        font-size: 32px;
    }
    img{
        width: 625px;
        align-items: flex-start;
        margin: 51px 0px;
    }
    section{
        overflow: scroll;
        background-color: #ffffff4d;
        overflow-x: hidden;
        overflow-y: hidden;
        margin: 25px 0px;
    }
    .carousel__container{
        white-space: nowrap;
        margin: 6px 31px;
        padding: 30px 0px;
    }
    .carousel-item{
        width: 100px;
        height: 100px;
        border-radius: 59px;
        overflow: hidden;
        margin-right: 50px;
        display: inline-block;/*Lo acomoda como carrusel*/
        cursor: pointer;
        transition: 450ms all;/*Tiempo de animación*/
        transform-origin: center left;/*Para que no se salga de la pantalla*/
        position: relative;
    }
    .carousel-item:hover ~ .carousel-item{
        transform:translate3d(100px,0,0)/*Para mostrar el carrusel en 3d*/
    }
    .carousel__container:hover .carousel-item{
        opacity:0.3;/*Para ocultar los iconos del fondo*/
    }
    .carousel__container:hover .carousel-item:hover{
        transform: scale(1.5);/*Para que muestre el campo diferente*/
        opacity:1;/*Paraque no deje el campo oculto*/
    }
    .carousel-item__img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin: 0px !important;
    }
}
`