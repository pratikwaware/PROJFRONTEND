import React, { useState, useEffect } from "react";
// import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { API } from "../backend";

const Cards = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

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
        <button onClick={addToCart} className="btn btn-outline-success">
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  const ImageHelper = ({ product }) => {
    const imageurl = product
      ? `${API}/product/photo/${product._id}`
      : `https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    return imageurl;
  };

  return (
    <>
      {/* <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cardTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescrption}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
          <div className="row">
            <div className="col-12">{showAddToCart(addtoCart)}</div>
            <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
          </div>
        </div>
      </div> */}
      <Card
        sx={{
          backgroundColor: "#FADDFA",
          width: 320,
          height: 330,
          alignContent: "center",
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
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cartDescrption}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around", columnGap: 1 }}>
          {getARedirect(redirect)}
          <Button size="small">Rs {cartPrice}</Button>
          <div>{showAddToCart(addtoCart)}</div>
          <div>{showRemoveFromCart(removeFromCart)}</div>
          <Button size="small">Stock:{productStock}</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
