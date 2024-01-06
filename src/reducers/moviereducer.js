const initState = {
    popular: [],
    series: [],
    topmovies: [],
    topseries: [],
    actionMovies: [],
    comedy: [],
    fantasy: [],
    comedySeries: [],
    disney: [],
    upcoming: []
}

const movieReducer = (state=initState,action) => {
switch (action.type) {
    case "FETCH_MOVIES":
        return {
            ...state,
           popular: action.payload.popular,
           topmovies: action.payload.topmovies,
           series: action.payload.series,
           topseries: action.payload.topseries,
            actionMovies: action.payload.actionMovies,
            comedy: action.payload.comedy,
            fantasy: action.payload.fantasy,
            comedySeries: action.payload.comedySeries,
            disney: action.payload.disney,
            upcoming: action.payload.upcoming
        }
              default:
            return{...state}
}
}

export default movieReducer