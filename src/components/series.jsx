import React from "react";
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { loadSeries } from "../actions/seriesaction";
import { Link } from "react-router-dom";

const Series = ({poster,id}) => {
    const dispatch = useDispatch();
    const loadSeriesHandler = () => {
        dispatch(loadSeries(id))
    }
    return(
        <StyledSeries onClick={loadSeriesHandler}>
            <Link to={`/shows/${id}`}>
       <img src={poster} alt="title"/>
        </Link>
        </StyledSeries>
    )
}
const StyledSeries = styled.div`
 padding-left: 1rem;
cursor: pointer;
img{
 min-width: 106px;
 max-width: 106px;
 border-radius: 1rem;
 margin-top: 1rem;
 margin-bottom: 1rem;
 height: 150px;
 background-size: cover;
 background-color: lightgreen;
 transition: transform 450ms;
 z-index: 2;
 &:hover{
    transform: scale(1.08);
opacity: 1;
 }
}


@media (max-width: 768px) {
    margin-bottom: 0;
    height: auto;
    
}
`
export default Series