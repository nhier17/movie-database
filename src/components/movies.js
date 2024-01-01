import React from "react";
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { loadDetail } from "../actions/detailaction";
import { Link } from "react-router-dom";


const Movie = ({title,image,id}) => {
    const dispatch = useDispatch();
  
        
    const loadMovieHandler = () => {
    dispatch(loadDetail(id))
    }
       
    return(
        <StyledMovie onClick={loadMovieHandler}>
            <Link to={`/detail/${id}`}>
            <img id={id} src={image} alt={title}/>
            </Link>
        </StyledMovie>
    )
}
const StyledMovie = styled.div`
position: relative;
cursor: pointer;
display: flex;

img{
    display: block;
   min-width:107px;
   max-width: 106px;
   height: 150px;
   margin-top: 1rem;
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

`

export default Movie