import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Paymentb = ({ products, setReload = (f) => f, reload = undefined }) => {
  let [info, setInfo] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const getAmount = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const showbtdropIn = () => {
    return (
      <div>
        {products.length > 0 ? (
          <div>
            <button className="btn btn-block btn-info" onClick={""}>
              Pay Now
            </button>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: getAmount(),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                });
              }}
            />
          </div>
        ) : (
          <h3>Please login or add something to cart</h3>
        )}
      </div>
    );
  };

  return (
    <div className="text-center">
      <h3>Your bill is {getAmount()} $</h3>
      {showbtdropIn()}
    </div>
  );
};

export default Paymentb;
