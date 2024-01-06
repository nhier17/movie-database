import axios from "axios";
import {
     popularMoviesURL,
    popularSeriesURL,
    topRatedSeriesURL,
    topratedMoviesURL,
    actionMoviesURL,
    comedyMovieURL,
    fantasyURL,
    comedySeriesURL, 
    disneySpecialsURL,
    upcomingMoviesURL
    } from "../api";

export const loadMovies = () => async(dispatch) => {
    const popularData = await axios.get(popularMoviesURL());
    const seriesData = await axios.get(popularSeriesURL());
    const topMoviesData = await axios.get(topratedMoviesURL());
    const topSeriesData = await axios.get(topRatedSeriesURL());
    const actionData = await axios.get(actionMoviesURL());
    const comedyData = await axios.get(comedyMovieURL());
    const fantasyData = await axios.get(fantasyURL());
    const coData = await axios.get(comedySeriesURL());
    const disneyData = await axios.get(disneySpecialsURL());
    const upcomingData = await axios.get(upcomingMoviesURL());
    dispatch({
        type: "FETCH_MOVIES",
        payload: {
            popular: popularData.data.results,
            topmovies: topMoviesData.data.results,
            series: seriesData.data.results,
            topseries: topSeriesData.data.results,
            actionMovies: actionData.data.results, 
            comedy: comedyData.data.results,
            fantasy: fantasyData.data.results,
            comedySeries: coData.data.results,
            disney: disneyData.data.results,
            upcoming: upcomingData.data.results
        }
    })
}
