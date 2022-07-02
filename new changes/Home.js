import React, { useState, useEffect } from "react";
import { API } from "../backend";
import "../styles.css";
import Base from "./Base";
import Cards from "./Card";
import { getProducts } from "./helper/coreapicalls";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <>
      <Base></Base>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          // mt: 5,
          columnGap: 6,
          bgcolor: "#fff",
          rowGap: 15,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((product, index) => {
          return <Cards product={product} />;
        })}
      </Box>
    </>
  );
}
