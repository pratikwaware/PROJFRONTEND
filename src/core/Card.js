import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { API } from "../backend";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Rating from "@mui/material/Rating";

const Cards = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [value, setValue] = React.useState(3);
  const cardTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";
  const productStock = product ? product.stock : "0";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <LoadingButton
          endIcon={<AddShoppingCartIcon />}
          variant="contained"
          onClick={addToCart}
        >
          Add to Cart
        </LoadingButton>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <LoadingButton
          endIcon={<RemoveShoppingCartIcon />}
          color="warning"
          variant="contained"
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
        >
          Remove from cart
        </LoadingButton>
      )
    );
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#eeeeee",
          width: 320,
          height: 365,
          alignContent: "center",
          alignItems: "center",
          boxShadow: "none",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="170"
          image={`${API}/product/photo/${product._id}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-center"
          >
            {cardTitle}
          </Typography>
          <Typography variant="body2">{cartDescrption}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around", columnGap: 1 }}>
          <Button size="small">$ {cartPrice}</Button>
          {/* <Button size="small">{GetCategory(product)}</Button> */}
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Button size="small">Stock:{productStock}</Button>
        </CardActions>
        <CardActions sx={{ justifyContent: "center", columnGap: 1 }}>
          {getARedirect(redirect)}
          <div>{showAddToCart(addtoCart)}</div>
          <div>{showRemoveFromCart(removeFromCart)}</div>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
