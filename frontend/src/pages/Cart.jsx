import React, { useEffect, useState } from "react";
import "../Style/product.css";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  DrawerHeader,
  DrawerBody,
  Thead,
  Table,
  Tr,
  Box,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import styled from "styled-components";

import axios from "axios";
import { Link } from "react-router-dom";



export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);


  const getData = async () => {
    const res = await axios.get("http://localhost:4500/carts",{email:localStorage.getItem("usermail")});
  console.log(res.data)
  console.log(localStorage.getItem("usermail"));
  setData(res.data.products);
  };

  useEffect(() => {
    getData()
  }, [update]);

  const handleIncrement = (itemId) => {
    const updatedItems = data?.map((item) => {
      if (item._id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };

  const handleDecrement = (itemId) => {
    const updatedItems = data?.map((item) => {
      if (item._id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setData(updatedItems);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4500/carts/delete/${id}`);
      setUpdate((prev) => !prev);
    } catch (error) {
   setUpdate((prev)=> !prev)
    }
  };
  const totalPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="cartbtn">
      <Box className="cartPosition"
    
          marginRight={"15px"}
          backgroundColor={"none"}
          zIndex={999}
          top={"18px"}
       right={0}
          position={"fixed"}
          ref={btnRef}
           border={"none"}
          onClick={onOpen}
        >
          <i id="shoppingCart"
            className="fa-solid fa-cart-shopping"
          ></i>
        </Box>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <TableContainer>
              <DIV>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>item</Th>
                      <Th>name</Th>
                      <Th isNumeric>Price</Th>
                    </Tr>
                  </Thead>
                </Table>

                {data?.map((el) => {
                  return (
                    <div className="contentdiv" key={el._id}>
                      <div className="firstBox">
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxUj3ju_SOxMIhO0TtM4HJrSTbdGNIEUMUuk3ratz8s223B0b_UzUub3z4dwcw8iDYjw"} alt="" />
                        <div className="name">
                          <div className="div">
                            <div className="b" fontSize="sm">
                              {el.name}
                            
                            </div>
                          </div>
                          <div className="quantity">
                            <button 
                            onClick={() => handleDecrement(el._id)}
                            >
                              -
                            </button>
                            <button disabled>{el.quantity}</button>
                            <button
                             onClick={() => handleIncrement(el._id)}
                             >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="price">
                          <Text ml={"4px"} fontSize="md">
                            ₹{el.price * el.quantity}
                          </Text>
                          <button
                            className="remove"
                            onClick={() => handleDelete(el._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="lastBox">
                  <div className="empty"></div>

                  <div className="full">
                    <div className="total">
                      <p>Subtotal:</p>
                      <p>₹{totalPrice}</p>
                    </div>
                    <div className="taxes">
                      <Text fontSize="xs">
                        Taxes and shipping calculated at checkout
                      </Text>
                    </div>

                    <div className="check">
                      <Link to="/checkout">
                        <button className="checkout">Checkout →</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </DIV>
            </TableContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

const DIV = styled.div`
  /* @media only screen and (min-width: 300px) and (max-width: 399px) {
    .cartbtn {
      content-visibility: hidden;
    }
  } */

  .contentdiv {
    border-bottom: 1px solid gray;
    padding-bottom:4px;
    align-items: center;
    margin-bottom: 10px;

  }
  .firstBox {
    display: flex;
  }
  img {
    width: 20%;
    height: 30%;
  }
  .name {
    display: flex;
    flex-direction: column;
  }
  div .b {
    /* border: 1px solid black; */
    white-space: nowrap;
    width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* border: 1px solid #000000; */
    margin-left:10px
  }

  .quantity {
    border: 1px solid gray;
    width: 30%;
    justify-content: space-between;
    height: 30px;
    margin-top: 20px;
    border-radius: 8px;
    margin-left:10px
  }
  .quantity button {
    border: none;
    padding: 3px 8px;
    border-radius: 4px;
  }
  .price {
    padding-left: 20px;
  }
  .remove {
    border: 1px solid gray;
    padding: 2px;
    border-radius: 4px;
    margin-top: 20px;
  }
  .total {
    width: 100%;
    height: auto;
    font-weight: 100px;
    display: flex;
    justify-content: right;
    margin-bottom: 10px;
  }
  .total h1 {
    margin-right: 15px;
    font-weight: 400;
  }
  .lastBox {
    width: 100%;
    display: flex;
  }
  .empty {
    width: 40%;
    height: 200px;
  }
  .full {
    width: 60%;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: end;
  }
  .lastBox button {
    border: 1px solid black;
    padding: 7px 30px;
    font-weight: 400;
    background-color: black;
    color: #fff;
    margin-top: 10px;
    border-radius: 2px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .taxes {
    opacity: 0.5;
  }
  .check {
    justify-content: center;
  }
  .check .checkout {
    padding: 7px 65px;
  }

`;
