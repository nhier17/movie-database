import React, { useEffect, useState } from 'react'
import  {  useParams } from "react-router-dom"
import { api_key } from '../api'
import styled from "styled-components"



function SearchedShows() {

    const API_IMG = "https://image.tmdb.org/t/p/original/"
    let params = useParams();
    const [searchedShows, setSearchedShows] = useState([]);
    const getSearched = async (movie_title) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie_title}`);
        const api = await data.json();
        setSearchedShows(api.results)
    }
    useEffect(() =>{
        getSearched(params.search)
    },[params.search])



  return (
    <div>
        {searchedShows.map((movie)=> {
            return (
            <Card key={movie.id} >
                <Flex>
                <img src={API_IMG+movie.poster_path} alt={movie.title}/>
                <Container>
                <h4>{movie.original_title}</h4>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
                </Container>
                </Flex>
                 </Card>
            )
        })}
    </div>
  )
}

const Card = styled.div`

a {
    text-decoration: none;
}
img{
 min-width: 300px;
 max-width: 300px;
 border-radius: 1rem;
 margin-top: 1rem;
 margin-bottom: 1rem;
 height: 330px;
 background-size: cover;
 background-color: lightgreen;
 transition: transform 450ms;
 z-index: 2;
 &:hover{
    transform: scale(1.08);
opacity: 1;
 }
}
h4 {
    margin-left: 1rem;
    padding-bottom: 1rem;
     color: white;
    font-weight: 800;
  
}
p{
    color: white;
    max-width: 40rem;
    margin-left: 1rem;
}
@media (max-width: 768px){
    p{
        max-width: 25rem;
        font-size: 1rem;
    }
}
`
const Flex = styled.div`
margin-top: 5rem;
  display: flex;  
  min-height: 30dvh;
  box-shadow: 5px 0px 20px rgba(10, 1, 1, 0.041);
    `
 const Container = styled.div`
margin-top: 1rem;

 `   
export default SearchedShows