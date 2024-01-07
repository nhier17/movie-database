import React,{useState,useEffect} from 'react'
import axios from "axios"
import { popularMoviesURL } from '../api';
import styled from "styled-components"
import {motion} from "framer-motion"


const Banner= () => {
    const poster = "https://image.tmdb.org/t/p/original/"
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
         async function fetchData() {
const request = await axios.get(popularMoviesURL())
setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
return request;
        }
fetchData()
    },[])
    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
   
  return (
    
    <Container 
     style={{backgroundSize: "cover",backgroundImage: `url(${poster}${movie?.backdrop_path})`, backgroundPosition: "center",width: "100%", backgroundRepeat: "no-repeat"}}
     >
<StyledBanner>
<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
</StyledBanner>
<Description>{truncate(movie?.overview, 150)}</Description>
<Details>
<button>Play</button>
<button className='info'>More Info</button>
</Details>
 </Container>

  )
}
const Container = styled(motion.header)`
color: white;
height: 600px;
z-index: -1;
background: linear-gradient(77deg, rgba(0,0,0,.6),transparent 85%);
top: 0;
bottom: 0;
left: 0;
opacity: 1;
right: 26.09%;
transition: opacity .5s;
padding-top: 2rem;
cursor: pointer;
@media (max-width: 768px) {
  width: 100%;
  height: auto;
}

`

const StyledBanner = styled(motion.div)`
margin-top: 20rem;
height: 70px;

h1 {
     font-size: 3rem !important;
    font-weight: 800;
    padding-bottom: 3rem;
}
@media (max-width: 768px){
    h1 {
        font-size: 1.5rem !important;
    }
}
`
const Details = styled(motion.div)`

button{
    cursor: pointer;
    color: bblack;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem 0.5rem 2rem; 
    margin-right: 1rem;
    margin-bottom: 2rem;
    background-color: white;
    margin-left: 1rem;
    &:hover{
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
    .info {
        background-color: grey;
    }
    @media (max-width: 768px) {
    margin-bottom: 2rem;
}
}

`
const Description = styled.p`
width: 45rem;
font-size: 1rem;
line-height: 1.3;
margin-top: 0rem;
max-width: 360px;
color: white;
margin-left: 1rem;
margin-bottom: 1rem;
font-family: 'Lato',sans-serif;
`

export default Banner