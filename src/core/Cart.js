import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 5,
          columnGap: 6,
          bgcolor: "#fff",
          rowGap: 15,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </Box>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <Base></Base>
      <div>
        <h1 className="text-center">Checkout Section</h1>
      </div>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Box xs={12} sm={8} sx={{ width: "60%" }}>
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h4>No products</h4>
          )}
        </Box>
        <Grid item xs={12} sm={4} sx={{ justifyContent: "flex-end" }}>
          <Paymentb products={products} setReload={setReload} />
        </Grid>
      </Grid>
    </PayPalScriptProvider>
  );
};

export default Cart;
