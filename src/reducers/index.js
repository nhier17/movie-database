import {combineReducers} from "redux"
import movieReducer from "./moviereducer"
import detailReducer from "./detailreducer"
import seriesReducer from "./seriesreducer"

const rootReducer = combineReducers({
    movies: movieReducer,
    detail: detailReducer,
   shows: seriesReducer,
})
export default rootReducer