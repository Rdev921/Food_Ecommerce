import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

export const getProducts = (obj) => (dispatch) => {
    let url = `https://befit.onrender.com/gym_products`
    dispatch({type:PRODUCT_REQUEST})
  return  axios.get(url,obj)
    .then((res)=> {
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
   
    })
    .catch((err)=> {
      dispatch({type:PRODUCT_FAILURE})
    })
  };


