import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const URL = "https://dummyjson.com/products/";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(URL + id);
    const fetchedProduct = await response.json();

    setProduct(fetchedProduct);
  };

  console.log(product);

  return (
    <div>
      <Link to="/products">
        <div
          style={{
            display: "flex",
            alignItems: "left",
            margin: "1rem 2rem",
            cursor: "pointer",
            border: "1px solid red",
            borderRadius: "10px",
            width: "4rem",
            padding: "5px 2px 5px 12px",
          }}
        >
          Back
        </div>
      </Link>
      <div>
        <div>{id}</div>
        <h1>{product.title}</h1>
        <h1>{product.description}</h1>
        <h1>{product.stock} pieces</h1>
      </div>
    </div>
  );
};

export default ProductPage;
