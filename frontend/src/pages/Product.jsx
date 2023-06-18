import React, { useState } from "react";
import "../Style/product.css";
import {
  Box,
  Text,
  Select,
  Checkbox,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import ProductList from "./ProductList";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";


const Product = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // const {products} = useSelector((store)=> store.productReducer)
  const [search, setSearch] = useSearchParams();
  const initcategory = search.getAll("category");
  const initbrand = search.getAll("brand");
  const initialOrder = search.get("order");
  const [category, setCategory] = useState(initcategory || []);
  const [brand, setBrand] = useState(initbrand || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [length, setLength] = useState(0);
  const [update, setUpdate] = useState(false);

  const handleChange = (e) => {
    let newCategory = [...category];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };
  const handleBrand = (e) => {
    let newBrand = [...brand];
    let value = e.target.value;

    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };
  useEffect(() => {
    let params = {
      category,
      brand,
    };
    order && (params.order = order);
    setSearch(params);
  }, [category, brand, update, order]);

  const updateData = () => {
    setUpdate((prev) => !prev);
  };

  return (
    <>
      <div className="outer">
        <div className="product">
          <div className="left">
            <Text opacity={"0.5"}>Supplement Store /</Text>
            <Text opacity={"0.5"}>Sports Nutrition /</Text>
            <Text as={"b"}>Protein Powders</Text>
          </div>
          <div className="right">
            <div>
              <Text className="text">Showing {length} of 141 results</Text>
            </div>
            <div>
              <Select onChange={handleSort}>
                <option value="">Sort by Price</option>
                <option value={"asc"} defaultValue={order === "asc"}>
                  Sort by price: low to high
                </option>
                <option value={"desc"} defaultValue={order === "desc"}>
                  Sort by price: high to low
                </option>
              </Select>
            </div>
          </div>
        </div>

        <div className="middle">
          <div className="middleleft">
            <div className="hide">
              <Text className="m" fontSize="xl" as={"b"}>
                Protein Powders
              </Text>
              <img
                className="image"
                src="https://cdn.nutrabay.com/wp-content/uploads/2021/11/purchase-protection-1-4.png"
                alt="image"
              />
            </div>
            <div className="PREFERENCE">
              <Text className="m" fontSize="xl" as={"b"}>
                PREFERENCE
              </Text>
            </div>

            <div className="preference">
              <div>
                <Checkbox>Vegetarian (223)</Checkbox>
              </div>
              <div>
                <Checkbox>Non-Vegetarian (3)</Checkbox>
              </div>
            </div>

            <div className="CATEGORY">
              <Text fontSize="xl" as={"b"}>
                FILTER SUB-CATEGORY
              </Text>
            </div>

            <Accordion className="accordion" allowMultiple width={"250px"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Filter By Category
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className="subCategory">
                        <div>
                          <input
                            type="checkbox"
                            value={"Whey Protein Powder"}
                            onChange={handleChange}
                            checked={category.includes("Whey Protein Powder")}
                          />
                          <label>Whey Protein Powder</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Whey Protein Concentrate"}
                            onChange={handleChange}
                            checked={category.includes(
                              "Whey Protein Concentrate"
                            )}
                          />
                          <label>Whey Protein Concentrate</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Whey Protein Isolate"}
                            onChange={handleChange}
                            checked={category.includes("Whey Protein Isolate")}
                          />
                          <label>Whey Protein Isolate</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Casein Protein"}
                            onChange={handleChange}
                            checked={category.includes("Casein Protein")}
                          />
                          <label>Casein Protein</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Vegan/Plant Protein"}
                            onChange={handleChange}
                            checked={category.includes("Vegan/Plant Protein")}
                          />
                          <label>Vegan/Plant Protein</label>
                        </div>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>

            <div className="BRAND">
              <Text fontSize="xl" as={"b"}>
                BRAND
              </Text>




























































































































































































































































































































































































































            </div>

            <Accordion className="accordion" allowMultiple width={"250px"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Filter By Brand
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className="brand">
                        <div>
                          <input
                            type="checkbox"
                            value={"Fast&Up"}
                            onChange={handleBrand}
                            checked={brand.includes("Fast&Up")}
                          />
                          <label>Fast&Up</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Nutrabay"}
                            onChange={handleBrand}
                            checked={brand.includes("Nutrabay")}
                          />
                          <label>Nutrabay</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Optimum Nutrition"}
                            onChange={handleBrand}
                            checked={brand.includes("Optimum Nutrition")}
                          />
                          <label>Optimum Nutrition</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"MuscleTech"}
                            onChange={handleBrand}
                            checked={brand.includes("MuscleTech")}
                          />
                          <label>MuscleTech</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Bigmuscles Nutrition"}
                            onChange={handleBrand}
                            checked={brand.includes("Bigmuscles Nutrition")}
                          />
                          <label>Bigmuscles Nutrition</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"AS-IT-IS"}
                            onChange={handleBrand}
                            checked={brand.includes("AS-IT-IS")}
                          />
                          <label>AS-IT-IS</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            value={"Healthfarm"}
                            onChange={handleBrand}
                            checked={brand.includes("Healthfarm")}
                          />
                          <label>Healthfarm</label>
                        </div>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <div className="FLAVOUR">
              <Text fontSize="xl" as={"b"}>
                FLAVOUR
              </Text>
            </div>
            <Accordion className="flauore" allowMultiple width={"250px"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Filter By Flavour
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <div className="flavour">
                        <div>
                          <Checkbox value={"Chocolate"} onChange={handleChange}>
                            Chocolate
                          </Checkbox>
                        </div>
                        <div>
                          <Checkbox
                            value={"Cookies & Cream"}
                            onChange={handleChange}
                          >
                            Cookies & Cream
                          </Checkbox>
                        </div>
                        <div>
                          <Checkbox value={"Vanilla"} onChange={handleChange}>
                            Vanilla
                          </Checkbox>
                        </div>
                        <div>
                          <Checkbox
                            value={"strawberry"}
                            onChange={handleChange}
                          >
                            strawberry
                          </Checkbox>
                        </div>
                      </div>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="middleright">
            <ProductList setLength={setLength} />
          </div>
        </div>
        <Cart updateData={updateData} />
      </div>
      
    </>
  );
};

export default Product;
