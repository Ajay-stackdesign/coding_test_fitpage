import { createStore, combineReducers, applyMiddleware } from "redux"

import thunk from "redux-thunk"


import { composeWithDevTools } from "redux-devtools-extension"
import { getAllStockReducer } from "./reducer/stockRedcer"


const reducer = combineReducers({
    stock: getAllStockReducer,
})

let initialStage = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialStage,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store