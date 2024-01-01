import React from 'react'
import styled from "styled-components"
import netflix from "../images/netflix.jpeg"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    
    <Nav>
        <Logo>
            <img src={netflix} alt="nav"/>
        </Logo>
        <NavMenu>
<Link to="/home">
        <span>HOME</span>
</Link>
<Link to="/home">
    <span>SEARCH</span>
</Link>
<Link to="/home">
    <span>MOVIES</span>
</Link>
<Link to="/home">
    <span>TV SHOWS</span>
</Link>
        </NavMenu>
        <LogOUt>
            <Link to="/">LogOUt</Link>
            </LogOUt>
    </Nav>
  )
}

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 36px;
letter-spacing: 16px;
z-index: 3;
`
const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
cursor: pointer;
img{
    display: block;
    width: 100%
}
@media (max-width: 768px) {
    display: none;
}
`
const NavMenu = styled.div`
position: relative;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
align-items: center;
margin: 0;
padding: 0;
font-size: 19px;
margin-right: auto;
margin-left: 25px;
a{
    display: flex;
    align-items: center;
    padding: 0 12px;
img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
}
span{
    color: rgb(249,249,249);
    font-size: 19.11px;
    padding: 2px 0;
    line-height: 1.08;
    letter-spacing: 1.42px;
    white-space: nowrap;
    position: relative;
}

}

`
const LogOUt = styled.div`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0,2s ease 0s;
cursor: pointer;
&:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;

}
@media (max-width: 768px) {
    display: none;
}
`

export default Header