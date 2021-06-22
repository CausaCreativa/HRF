import styled from 'styled-components'

export const Social = styled.div`
position:fixed;
padding: 4px;
right: 0;
top:250px;
z-index: 2000;
background-color: #09366B;
border-radius: 35px;
border: #000000 1px solid;
`;

export const MenuUl = styled.ul`
list-style: none;
`;
export const MenuLI = styled.li`
`;
export const MenuA = styled.a`
display: inline-block;
color: #fff;
background: #000;
padding: 20px 20px;
margin: 1px ;
text-decoration: none;
-webkit-transition: all, 1s, ease-in-out;
-moz-transition: all, 1s, ease-in-out;
-o-transition: all, 1s, ease-in-out;
transition: all, 1s, ease-in-out;
cursor: pointer;
border-radius: 50%;
background: ${ props => props.Background};
width: 25px;
height: 25px;
position: relative;
`;
export const FontAwesomeIcon = styled.svg`
height : "22px"; 
width : "22px"; 
display : "flex";
justifyContent : 'center';
`;

export const Icon = styled.div`
background-image:url(${ props => props.Image});
background-position: center;
background-repeat: no-repeat;
background-size: 100% 100%;
width: 100%;
height: 100%;
position: absolute;
`;
export const MenuNetworksElements = styled.div`

.social {
    position:fixed;
    left: 0;
    top:200px;
    z-index: 2000;
    background-color: #6D91ED;
    border-radius: 25px;
    border: #000000 3px solid;

}
.social ul {
    list-style: none;
}
.social ul li a {
    display: inline-block;
    color: #fff;
    background: #000;
    padding: 10px 15px;
    text-decoration: none;
    -webkit-transition: all, 1s, ease-in-out;
    -moz-transition: all, 1s, ease-in-out;
    -o-transition: all, 1s, ease-in-out;
    transition: all, 1s, ease-in-out;
    cursor: pointer;
    border-radius: 50%;
    border:#000000 1px solid;
}

.social ul li .icon-facebook{
    background: #3b5998;
}
.social ul li .icon-twitter{
    background: #00acee;
}
.social ul li .icon-instagram{
    background: linear-gradient(225deg, #515bd4, #8134af, #dd2a7b, #feda77, #f58529);
}
.social ul li .icon-whatsapp{
    background: #00bb2d
}
.social ul li a:hover{
    border: #fff 1px solid;
    background: #000;
}
`