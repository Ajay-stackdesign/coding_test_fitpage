
export const getAllStockReducer = (state = { stock: [] }, action) => {
    switch (action.type) {
        case "GetAllRequest":
            return {
                ...state,
                loading: true
            }
        case "GetAllSuccess":
            return {
                loading: false,
                stock: action.payload.stock
            }
        case "GetAllFailure":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}