import axios from "axios"
import { movieDetailsURL } from "../api"

export const loadDetail = (id) => async (dispatch) => {
    const movieData = await axios.get(movieDetailsURL(id))
    dispatch({
        type: "GET_DETAIL",
        payload: {
            movie: movieData.data,
        }
    })
}


