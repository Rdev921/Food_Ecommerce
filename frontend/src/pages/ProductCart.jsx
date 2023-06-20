import React from 'react'
import styled from 'styled-components';
import { Text,Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {  SkeletonCircle,Box,SkeletonText } from '@chakra-ui/react'
import { AiFillStar } from "react-icons/ai";
const ProductCart = ({ name,brand,image1,image2,image3,rating,category,price,mrp,description,instack,_id }) => {
  // const {isLoading} = useSelector((store)=> store.productReducer) 
 
const offer = Math.floor(((mrp-price)/mrp)*100)

    return (
     
    <Link to={`/products/${_id}`}>
            <DIV>
                <div className='first'>
                <h5 className="top-left">{offer}%</h5>

                
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw" alt="image1" />  
                </div>
            <div>
               <a href="#">{name}</a>    
            </div>
            <Box className='star' display={"flex"} justifyContent={"space-between"}>
           <Flex>
            <Text>Price :</Text>
            <Text as="del">₹ {mrp}</Text>
            <Text as="b">₹ {price}</Text>
            </Flex>
         

            <Flex>
          {Array(Math.floor(rating))
            .fill()
            .map((_, i) => (
              <Text key={i}>
                 <i className="fa-sharp fa-solid fa-star"></i>
              </Text>
            ))}
     </Flex>
            </Box>

            <Box textAlign={"justify"}>
              <Text fontSize={"15px"} fontWeight={600}>brand : {brand}</Text>
              <Text fontSize={"15px"} fontWeight={600}>category : {category}</Text>
              
              </Box>
    
           
            <div className='freebie'>
			<span>🎁 FREEBIE </span>	           
            </div>
            </DIV>
            </Link>
    )
}

export default ProductCart;

const DIV = styled.div` 
/* border: 1px solid gray; */
text-align: center;
cursor: pointer;
display: block;

  top: 0px;
  position: relative;
  padding: 5px;
    padding-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

:hover{

  transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    /* border: 1px solid #cccccc; */
    background-color: white;
    
}
.first{
    display: flex;
    /* border: 1px solid gray;  */
    position: relative; 
}
.first img{
    width: 90%;
    height: 200px;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 0px;
  border: none;
  border-radius: 60%;
  padding: 5px;
  color: #fff;
  background-color: #515151;
  font-size: 15px;
}
a{
color: #7ebef3;
}
.fa-sharp, .fa-solid{
  color  : #f49f00;
}
.star{
    display: flex;
    /* border: 1px solid blue; */
    width: 100%;
    justify-content:center;
    align-items: center;
    gap: 3px;
    cursor: pointer;
}
.star p{
font-size: medium;
}
.price{
 justify-content:center ;
 gap: 5px;
}
.freebie span{
  background-color: #051d17;
  color: #fff;
  padding: 0px 10px;
}

@media only screen and (min-width: 400px) and (max-width: 600px) {
  
  .first img{
    width: 100%;
    height: 150px;
}             
}
@media only screen and (min-width: 300px) and (max-width: 399px){
  .first img{
    width: 60%;
    height: 50%;
    margin-left: 50px;
}
}


`;
