import axios from "axios";
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

export const getProducts = (obj) => (dispatch) => {
    let url = `http://localhost:4500/products`
    dispatch({type:PRODUCT_REQUEST})
  return  axios.get(url,obj)
    .then((res)=> {
  console.log(res.data);
      dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.products})
   
    })
    .catch((err)=> {
      dispatch({type:PRODUCT_FAILURE})
    })
  };


