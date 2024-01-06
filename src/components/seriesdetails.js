import React from 'react'
import styled from "styled-components"
import {useSelector } from "react-redux"
import {motion} from "framer-motion"
import { titleAnim } from './animations'

import { useNavigate } from "react-router-dom"
import { FaPlay } from 'react-icons/fa'


const Seriesdetails = () => {
    const navigate = useNavigate() 
    const api_image = "https://image.tmdb.org/t/p/original/"
    const {shows} = useSelector((state) =>state.shows);
    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate("/home")
        }
    }
  return (
    <CardsShadow className='shadow' onClick={exitDetailHandler}>
<Details>
<img src={api_image+shows.backdrop_path} alt="title"/>
</Details>
<Stats>
<h1>{shows.original_name}</h1>
</Stats>
<ContentMeta>
    <Content>
        <Player>
            <FaPlay/>
            <span>PLAY</span>
        </Player>
        <Trailer>
            <FaPlay/>
            <span>TRAILER</span>
        </Trailer>
    </Content>
    <Subtitle variants={titleAnim} initial="hidden" animate="show">
    <p>Rating: {shows.vote_average}</p>
    <p>{shows.first_air_date} - {shows.last_air_date}</p>
    {shows.genres.map((data)=>(
        <p id={data.id} key={data.id}>{data.name}</p>
    ))}
    </Subtitle>
    <Description variants={titleAnim} initial="hidden" animate="show">
    <p>{shows.overview}</p>
    </Description>
</ContentMeta>
</CardsShadow>
    )
}

const CardsShadow = styled(motion.div)`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw - 5px);
`
const Details = styled.div`
left: 0;
opacity: 0.8;
position: fixed;
right: 0;
top: 0;
z-index: -1;
img{
      width: 100vw; 
    height: 100vh;
    
    @media (max-width: 768px) {
        width: 100%;
       
    }
}
`
const Stats = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 24px;
width: 100%;
h1{
    color: white;
    font-size: 20px;
}
`
const ContentMeta = styled.div`
max-width: 874px;
`
const Content = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 56px;
`
const Player = styled.button`
display: flex;
justify-content: center;
font-size: 15px;
margin: 0 1rem 0 1rem;
padding: 0 24px;
height: 56px;
border-radius: 4px;
align-items: center;
cursor: pointer;
letter-spacing: 1.8px;
text-align: center;
border: none;
svg {
    font-size: 1.5rem;
}
    &:hover{
        background: lightgrey;
        color: black;
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0 2rem;
        font-size: 12px;
        margin: 0 1rem 0 0;
        img{
           width: 25px;
        }
    }
`
const Trailer = styled(Player)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color: lightgrey;
`
const Subtitle = styled.div`
display: flex;
gap: 1rem;
justify-content: flex-start;
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
    p{
        color: white;
        font-family: 'Bebas Neue', sans-serif;
    }
 
@media (max-width: 768px) {
    font-size: 12px;
}
`
const Description = styled(motion.div)`

line-height: 1.4;
font-size: 20px;
padding: 16px 0;
color: rgb(249,249,249);
p{
    color: white;
    font-family: 'Lato',sans-serif;
}

@media (max-width: 768px) {
    font-size: 14px;
}
`

  


export default Seriesdetails