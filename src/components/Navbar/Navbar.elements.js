import styled from 'styled-components'

export  const Nav  = styled.nav`
background-color: transparent;
font-size:24px;
font-weight:600;
padding-top: 0px;
.navbar {
    padding: 25px;
    display: flex;
    align-items: center;
  }
  .navbar__container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30rem;
    list-style: none;
  }
  .logo {
    font-size: 2rem;
    margin-right: auto;
  }
  
  .navbar-item {
    font-size: 1.3rem;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  .menu-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 34px;
    height: 35px;
  }
  
  .menu-line {
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #000;
  }
  
  .line1 {
    top: 25%;
  }
  .line3 {
    bottom: 25%;
  }
`;