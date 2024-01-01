import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: black;
        }
        &::-webkit-scrollbar-track {
    background: black;
  }
    }
    body{
        user-select: none;
        overflow-x: hidden;
        height:auto;
        width: auto;
        background: #040714;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 19px;
        
    }
    
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
            }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
    
    @media only screen and (min-width: 768px){
        body{
            font-size: 16px;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 768px){
        body{
            font-size: 15px;
        }
    }
    @media only screen and (man-width: 479px){
        body{
            font-size: 14px;
        }
    }
`;


export default GlobalStyles;