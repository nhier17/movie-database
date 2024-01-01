const initialState = {
    shows: {genres: [] },
}

const seriesReducer = (state = initialState,action) => {
switch (action.type) {
    case "GET_SERIES":
        return{
            ...state,
            shows: action.payload.shows,
        }
        default: 
        return{...state}
}
    
}
export default seriesReducer