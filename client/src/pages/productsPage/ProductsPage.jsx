import React, { useEffect, useState } from "react";
import { reduceCategories } from "../../functions/Functions";
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Select,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import styles from "./ProductsPage.module.css";
import { Link } from "react-router-dom";

const URL = "https://dummyjson.com/products?limit=70";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredTerm, setFilteredTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const signedUser = JSON.parse(localStorage.getItem("signedUser"));

  const timer = () => {
    const nums = [1, 2, 3, 4, 5];

    for (let i = 1; i <= 5; i++) {
      if (i === 5) {
        i = 1;
      }
      console.log("inside timer", nums[i]);
      return nums[i];
    }
  };

  useEffect(() => {
    timer();
  });

  console.log("timer", timer());

  // console.log("signedUser", signedUser);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const fetchProducts = async () => {
    const response = await fetch(URL);
    const fetchedProducts = await response.json();
    setProducts(fetchedProducts.products);
    setCategories(
      reduceCategories(
        fetchedProducts.products.map((product) => product.category)
      )
    );
  };

  const handleFilterChange = (value) => {
    if (!selectedFilters.includes(value)) {
      setFilteredTerm(value);
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    }
  };

  const deleteFilter = (deletedFilter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== deletedFilter)
    );
  };

  const filteredProducts =
    selectedFilters.length > 0
      ? products.filter((product) => selectedFilters.includes(product.category))
      : products;

  console.log("products", products);
  console.log("selectedFilters", selectedFilters);

  return (
    <div>
      <div className={styles.wrapper}>
        <Select
          placeholder="Select Category"
          value={filteredTerm}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          ) : (
            <h1>No categories to display</h1>
          )}
        </Select>
      </div>

      <div>
        {selectedFilters.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {selectedFilters.map((filter) => (
              <div style={{ margin: "10px" }}>
                <Tag>
                  <TagLabel>{filter}</TagLabel>
                  <Button onClick={() => deleteFilter(filter)}>X</Button>
                </Tag>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedFilters.length === 0 ? (
        <div className={styles.productContainer}>
          {products.map((product) => (
            <Card maxW="md" key={product.title} mx="1rem" px="0.5rem" my="2rem">
              <Link to={`/product/${product.id}`}>
                <Box maxW="sm" display="flex" justifyContent="center">
                  <Image
                    boxSize="250px"
                    objectFit="contain"
                    justifyContent="center"
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                  />
                </Box>
                <Heading as="h2" size="md">
                  {product.title}
                </Heading>
                <Text>{product.description}</Text>
              </Link>
              <div>{product.category}</div>
            </Card>
          ))}
        </div>
      ) : (
        <div className={styles.productContainer}>
          {filteredProducts.map((product) => (
            <div key={product.title} className={styles.productCard}>
              <div className={styles.imgStyle}>
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                />
              </div>
              <Link to={`/product/${product.id}`}>
                <div>{product.title}</div>
              </Link>
              <div>{product.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
