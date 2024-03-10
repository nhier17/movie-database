import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { loadMovies } from "../actions/movieaction";
import Movie from "../components/movies";
import styled from "styled-components"
import {motion} from "framer-motion"
import Series from "../components/series";
import Banner from "../components/Banner";



const Home = () => {
 const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadMovies())
    },[dispatch])
    //get data
const {popular,series,topmovies,topseries,actionMovies,comedy,fantasy,comedySeries,disney,upcoming} = useSelector((state)=> state.movies)
const API_IMG = "https://image.tmdb.org/t/p/original/"

    return(
<MovieList>
    <Banner/>
    <h1>Upcoming Movies</h1>
    <Movies>
        {upcoming.map((movie) =>(
            <Movie
            id={movie.id}
            key={movie.id}
            image={API_IMG+movie.poster_path}
            />
        ))}
    </Movies>
<h1>Popular Movies</h1>
    <Movies>
    
    {popular.map((movie)=> (
        <Movie 
        id={movie.id}
        key={movie.id}
        image={API_IMG+movie.poster_path}
        release={movie.release_date}
        />
    ))}
    </Movies>
    <h1>Netflix Originals</h1>
    <Movies>
        {series.map((series)=>(
            <Series
            id={series.id}
            key={series.id}
            poster={API_IMG+series.poster_path}
            />
        ))}
    </Movies>
    <h1>Animation</h1>
    <Movies>
    
    {comedy.map((movie)=> (
        <Movie 
        id={movie.id}
        key={movie.id}
        image={API_IMG+movie.poster_path}
        />
    ))}
    </Movies>
    <h1>Disney Specials</h1>
    <Movies>
        {disney.map((series) => (
            <Series
            id={series.id}
            key={series.id}
            poster={API_IMG+series.poster_path}
            />
        ))}
    </Movies>
    <h1>Top Rated Movies</h1>
    <Movies>
    
    {topmovies.map((movie)=> (
        <Movie
        
        id={movie.id}
        key={movie.id}
        image={API_IMG+movie.poster_path}
        />
    ))}
    </Movies>
    
    <h1>Top Rated Series</h1>
    <Movies>
        {topseries.map((series)=>(
            <Series
            id={series.id}
            key={series.id}
            poster={API_IMG+series.poster_path}
            
            />
        ))}
    </Movies>
    <h1>Sci-fi Movies</h1>
    <Movies>
    
    {actionMovies.map((movie)=> (
        <Movie 
        id={movie.id}
        key={movie.id}
        image={API_IMG+movie.poster_path}
        />
    ))}
    </Movies>
    <h1>Sci-fi & Fantasy</h1>
    <Movies>
    
    {fantasy.map((series)=> (
        <Series
        id={series.id}
        key={series.id}
        poster={API_IMG+series.poster_path}
        />
    ))}
    </Movies>
    <h1>Comedy</h1>
    <Movies>
        {comedySeries.map((series) => (
            <Series
            id={series.id}
            key={series.id}
            poster={API_IMG+series.poster_path}
            />
        ))}
    </Movies>
 
</MovieList>
    )
}

const MovieList = styled(motion.div)`
background-color: rgb(20, 20, 20);
width: 100%;
position: relative;

h1{
    color: #E5E5E5;
    font-size: 19.11px;
    padding: 1rem 0rem;
    padding-left: 1rem;
  
}

`;

const Movies = styled(motion.div)`
display: inline-block;
overflow: scroll;
scrollbar-color: black;
background-color: rgb(20, 20, 20);
white-space: nowrap;
padding-bottom: 0px;
display: flex;
gap: 1rem;
&::-webkit-scrollbar{
    display: none;
}
img{
    display: block;
   min-width:107px;
   max-width: 106px;
   height: 150px;
   margin-bottom: 1rem;
    transition: transform 450ms;
    border-radius: 1rem;
    top: 0;
    z-index: 1;
    &:hover{
transform: scale(1.08);
opacity: 1;

}
}

@media (max-width: 768px) {
    margin-bottom: 0;
}

`;
export default Home