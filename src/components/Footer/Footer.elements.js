import styled from 'styled-components'

export  const ContainerFooter  = styled.nav`
position: absolute;
width: 100%;
height: 161px;
left: 0px;
background-color: #262626;
color: white;
ul {
    list-style-type: none;
    margin:31px 0px 0px 0px;
    padding: 0;
    overflow: hidden;
}

li {
    float: left;
    width: 30%;
    text-align: center;
    margin: 0 0 0 3%;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 26px;
}

li a:hover {
    background-color: #2f2c2c;
}
div{
    text-align: center;
    margin-top: 20px;
}
`;