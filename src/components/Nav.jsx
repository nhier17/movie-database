import React, { useState } from 'react'
import styled from "styled-components"
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from "react-router-dom"
import { fadeIn } from './animations'


const Header = () => {
    const navigate = useNavigate();
    const [isSearchVisible,setIsSearchVisible ] = useState(false)
    const [inputValue, setInputValue] = useState("")
    
    const handleClick = () => {
        setIsSearchVisible(! isSearchVisible)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + inputValue)
         setInputValue('')
            }
        const exitHandler = () => {
            navigate("/home")
        }    
  return (
    
    <Nav>
        <Logo>
        <FiMenu onClick={exitHandler} />
        </Logo>
        <NavMenu>
<Link to="/home">
        <span>HOME</span>
</Link>
<Link to="/home">
    <span>MOVIES</span>
</Link>
<Link to="/home">
    <span>TV SHOWS</span>
</Link>
        </NavMenu>
        <LogOUt onSubmit={submitHandler} variants={fadeIn}>
           <div>
            <FaSearch onClick={handleClick} />
            {isSearchVisible && (
            <input onChange={(e) => setInputValue(e.target.value)}  value={inputValue} type='text' placeholder='movies'/>
            )}
            </div> 
            
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
background-color: rgb(20, 20, 20);
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
display: inline-block;
cursor: pointer;
svg{
    display: block;
    font-size: 24px;
    color: white;
    
}
@media (max-width: 768px) {
    img {
        width: 70%;
    }
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
@media (max-width: 768px) {
    display: none;
}
`
const LogOUt = styled.form`
padding: 8px 16px;
letter-spacing: 1.5px;
border-radius: 4px;
transition: opacity 0,75s ease 0s;
div {
position: relative;
width: 100%;
}
input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    
}

svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.5rem;
}
`


export default Header