import React from 'react'
import styled from "styled-components"
import mylist from "../images/mylist.jpeg"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
        <Content>
            <CTA> 
              <SignUP>
          <Link to="/home">LOG IN</Link> 
          </SignUP> 
          <p>Get full access to Openheimer and so much more</p>
          
            </CTA>
<BgImage/>
        </Content>
    </Container>
  )
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;

`
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;

`
const BgImage = styled.div`
object-fit: cover;
background-image: url(${mylist});
height: 100vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`
const CTA = styled.div`
margin-bottom: 2vw;
max-width: 650px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
p{
    color: hsla(0,0%,95.3%,1);
    font-size: 20px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
}

`

const SignUP = styled.div`
cursor: pointer;
font-weight: bold;
color: #f9f9f9; 
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover{
    background-color: #0483ee;
}
`

export default Login