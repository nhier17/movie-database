const base_url = "https://api.themoviedb.org/3/"
export const api_key= "709dbc710c09a2a850422458d40a6f43"




export const popularMoviesURL = () => `${base_url}movie/popular?api_key=${api_key}`
export const popularSeriesURL = () => `${base_url}discover/tv?api_key=${api_key}&with_networks=213`
export const topratedMoviesURL = () => `${base_url}movie/top_rated?api_key=${api_key}`
export const topRatedSeriesURL = () => `${base_url}tv/top_rated?api_key=${api_key}`
export const disneySpecialsURL = () => `${base_url}discover/tv?api_key=${api_key}&with_networks=2739`
export const comedySeriesURL = () => `${base_url}/discover/tv?api_key=${api_key}&with_genres=35`
export const actionMoviesURL = () => `${base_url}discover/movie?api_key=${api_key}&with_genres=878`
export const comedyMovieURL = () => `${base_url}/discover/movie?api_key=${api_key}&with_genres=16`
export const fantasyURL = () => `${base_url}/discover/tv?api_key=${api_key}&with_genres=10765`
export const movieDetailsURL = (movie_id) => `${base_url}movie/${movie_id}?api_key=${api_key}`

export const upcomingMoviesURL = () =>  `${base_url}movie/upcoming?api_key=${api_key}`
//shows
export const seriesDetailURL = (series_id) => `${base_url}tv/${series_id}?api_key=${api_key}`

// searched
