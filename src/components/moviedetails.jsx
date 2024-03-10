import React from 'react'
import styled from "styled-components"
import {useSelector} from "react-redux"
import {motion} from "framer-motion"

import { titleAnim } from './animations'
import {useNavigate} from "react-router-dom"
import {FaPlay} from "react-icons/fa"


const MovieDetails = () => {
    const navigate = useNavigate()
    const API_IMG = "https://image.tmdb.org/t/p/original/"
    const {movie} = useSelector((state)=>state.detail)
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")) {
            document.body.style.overflow ="auto"
            navigate('/home')
        }
    }


    return(
<CardsShadow className='shadow' onTouchStart={exitDetailHandler} onClick={exitDetailHandler}>
<Details>
<img src={API_IMG+movie.backdrop_path} alt="title"/>
</Details>
<Stats>
<h3>{movie.title}</h3>
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
    <p>Rating: {movie.vote_average}</p>
    <p>{movie.release_date}</p>
        {movie.genres.map((data) => (
            <p id={data.id} key={data.id}>{data.name}</p>
        ))}
    
    </Subtitle>
    <Description variants={titleAnim} initial="hidden" animate="show">
    <motion.p>{movie.overview}</motion.p>
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
left: 0px;
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
img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
}
h3{
    color: goldenrod;
    font-size: 2rem;
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
flex-wrap: nowrap;
gap: 1rem;
justify-content: flex-start;
color: rgb(249,249,249);
font-size: 15px;

h3{
    color: white;
    }
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
    font-family: 'Lato',sans-serif
}

@media (max-width: 768px) {
    font-size: 14px;
}
`
export default MovieDetails