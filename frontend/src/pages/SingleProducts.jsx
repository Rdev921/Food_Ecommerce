import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Text,Flex,Box,useBreakpointValue } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
// import { cartProducts } from '../redux/productReducer/action'
import axios from "axios";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import ReactImageMagnify from "react-image-magnify";
import { useNavigate } from "react-router-dom";

const SingleProducts = () => {

  const toast = useToast();
  const [count, setCount] = useState(1);
  const [weight, setWeight] = useState(1);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducer.products);
  const navigate = useNavigate()
  const getProduct = async() => {
    
    try {
      const newdata =  await axios.get(`http://localhost:4500/products/${id}`)
      // console.log(newdata.data.product)
      setData(newdata.data.product)

  } catch (err) {
    console.log(err);
  }
  
  
}

const breackToHideoverFlow = useBreakpointValue({
  base: "hidden",
  sm: "hidden",
  md: "hidden",
  lg: "",
  xl: "",
  xxl: "",
});


useEffect(() => {
  getProduct()
},[]);

const { name,brand,image1,image2,image3,rating,category,price,mrp,description,instack,_id } = data

const handleCart = () => {
    toast({
        title: " Added To Cart ",
        description: "Successfully Add To Cart",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
    let cartdata = {
        email:"mukeshd4797@gmail.com",
        name,brand,image1,image2,image3,rating,price,mrp,quantity:1
      };
      axios.post("http://localhost:4500/carts/create", cartdata);
    };
    const offer = Math.floor(((mrp-price)/mrp)*100)
    return (
    <div>
     
      <DIV>
        <div className="left">
          <div className="first">
            <h5 className="top-left">{offer}%</h5>
            {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw"} alt="" /> */}
            
            <Box overflow={breackToHideoverFlow}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw",
                  },
                  largeImage: {
                    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw",
                    width: 700,
                    height: 2000,
                  },
                }}
              />
            </Box>
          </div>
          <div className="middle">
            <p className="fit">FOODHUB</p>
            <p>{name}</p>
            <Flex>
          {Array(Math.floor(4))
            .fill()
            .map((_, i) => (
              <Text key={i}>
                 <i className="fa-sharp fa-solid fa-star"></i>
              </Text>
            ))}
     </Flex>
            <div className="dabba">
              <p>:gift: Free Nutrabay Shaker</p>
              <p>
                :gift: Free Dr. Vaidya Plant Protein with prepaid cart value
                {">"}₹12,000
              </p>
              <p>
                :gift: Free Nutrabay Stringer with prepaid cart value {">"}{" "}
                ₹8,000
              </p>
              <p>
                Get The Man Company exclusive discount voucher with every
                purchase. T&C
              </p>
            </div>
           
          </div>
        </div>
        <div className="right">
      
          <div className="mrp">
            <p>MRP : </p>
            <Text opacity={".5"} as="del" fontSize={"xl"}>
              $ {mrp}
            </Text>
          </div>
          <div className="mrp">
            <p>selling Price : </p> 
           <Text color={"red.600"} as={"b"} fontSize={"xl"}>
              $ {price}
            </Text>
          </div>
          <div className="cutmrp">
            <p>You Save: </p>
            <Text color={"red.600"}>
                {`$ ${mrp-price}.${offer}%`}
            </Text> 
          </div>
          <Text className="opacity">Inclusive of all taxes </Text>
          <br />
          <Text className="stock">{instack} left only</Text>
          <div className="add">
            <div className="count">
              <button
                className="countButton"
                disabled={count <= 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
              <button className="countButton">{count}</button>
              <button
                className="countButton"
                disabled={count >= 10}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="main">
              <button className="cartIconButton"
               onClick={handleCart}
               >
                Add to Cart
              </button>
            </div>
          </div>


          <div className="main">
              <button className="cartIconButton" style={{marginLeft:"30px",backgroundColor:"black",color:"white", marginTop:"40px"}}
              onClick={()=> navigate("/products")}
               >
                Continue Shooping
              </button>
            </div>


        </div>
      </DIV>
      <Cart />
    </div>
  );
};
export default SingleProducts;
const DIV = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  font-weight: 400;
  padding: 10px;
  justify-content: space-between;
 
  .left {
    /* border: 1px solid blue; */
    width: 70%;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 3px;
    justify-content:space-between;
  }
  .middle {
    /* border: 1px solid pink; */
    display: flex;
    flex-direction: column;
    text-align: start;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 3px;
    width: 50%;
  }
  .fit {
    font-size: 20px;
  }
  .right {
    /* border: 1px solid black; */
    width: 30%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 20px;
    padding-bottom: 20px;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .first {
    display: flex;
    /* border: 1px solid red;  */
    position: relative;
    width: 50%;
    justify-content:center;
    align-items:center

  }
  .first div{
    width: 90%;
    height: 90%;
  }
  .top-left {
    position: absolute;
    top: 30px;
    left: 30px;
    /* border: none; */
    border-radius: 60%;
    padding: 5px;
    color: #fff;
    background-color: #05cf31;
  }
  .fit {
    font-size: 23px;
    opacity: 0.5;
  }
  .fa-sharp,
  .fa-solid {
    color: #f49f00;
  }
  .mainbox {
    gap: 10px;
  }
  .box {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 12px;
  }
  .dabba p {
    border: 1px solid gray;
    margin-top: 10px;
    padding: 12px;
  }
  .maingray {
    border: 1px solid #ece9e9;
    margin-top: 10px;
    background-color: #f5f2f2;
  }
  .gray {
    padding: 12px;
    margin-top: 5px;
  }
  .gray h6 {
    font-weight: bold;
  }
  .weightBox {
    font-size: 14px;
  }
  .weight {
    font-size: 15px;
    /* font-weight: bold; */
    opacity: 0.7;
    display: flex;
  }
  .buttom button {
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid orange;
    margin-top: 15px;
    padding: 3px 5px;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #faf9f9;
  }
  .buttom button:hover {
    background-color: #ff7b00;
  }
  .mrp {
    display: flex;
    gap: 10px;
  }
  .cutmrp {
    display: flex;
    gap: 10px;
  }
  .opacity {
    opacity: 0.5;
  }
  .stock {
    font-size: 20px;
    font-weight: bold;
    color: #277927;
  }
  .count {
    gap: 5px;
    display: flex;
    justify-content: space-around;
  }
  .count .countButton {
    border: 1px solid red;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #f3f1f1;
    border-radius: 4px;
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bold;
    padding: 2px 9px;
  }
  .count button:hover {
    background-color: #ff4c00;
  }
  .count .cartbutton {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #f3f1f1;
    padding: 6px 60px;
    border-radius: 4px;
    background-color: #ff4c00;
    color: white;
    font-weight: bolder;
    margin-left: 15px;
  }
  .count .cartbutton:hover {
    background-color: #ff4400;
  }
  .add {
    display: flex;
    justify-content: space-around;
  }
  .cartIconButton {
    border: none;
    background: #ff4c00;
    color: #f2f2f2;
    padding: 6px 60px;
    font-size: 18px;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    transition: all 500ms ease;
    overflow: hidden;
  }
  .cartIconButton:before {
    font-family: FontAwesome;
    content: "\f217";
    position: absolute;
    top: 11px;
    left: -30px;
    transition: all 200ms ease;
  }
  .cartIconButton:hover:before {
    left: 7px;
  }
  .cartIconButton:hover {
    box-shadow: 1px 3px 8px #000;
  }
  @media only screen and (min-width: 601px) and (max-width: 800px) {
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    .first img {
      width: 100%;
      height: 300px;
    }
    .left {
      width: 100%;
    }
    .first {
      width: 80%;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 600px) {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    .first img {
      width: auto;
      height: 150px;
    }
    .left {
      /* flex-direction: column; */
      width: 100%;
    }
    .first {
      width: 60%;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    .first img {
      width: auto;
      height: auto;
    }
    .left {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .first {
      width: 100%;
      justify-content: center;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
    .cartIconButton {
      padding: 5px 40px;
      margin-top: 7px;
    }
  }
`;
