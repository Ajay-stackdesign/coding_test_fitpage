import axios from "axios"

export const getAllStock = () => async (dispatch) => {
    try {
        dispatch({ type: "GetAllRequest" })

        const { data } = await axios.get("/api/v1/getall")
        dispatch({
            type: "GetAllSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetAllFailure",
            payload: error.response.data.message
        })
    }
} 