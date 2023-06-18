
import { reducer as productReducer } from "./redux/productReducer/reducer";
import { applyMiddleware, legacy_createStore, combineReducers } from 'redux'

import thunk from "redux-thunk";



const reducer = combineReducers({

   productReducer

})


export const store= legacy_createStore(reducer, applyMiddleware(thunk))


