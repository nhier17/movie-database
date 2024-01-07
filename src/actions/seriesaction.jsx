import axios from "axios"
import { seriesDetailURL } from "../api"

export const loadSeries = (id) => async (dispatch) => {
    const seriesData = await axios.get(seriesDetailURL(id))
    dispatch({
        type: "GET_SERIES",
        payload: {
            shows: seriesData.data,
        }
    })
}
