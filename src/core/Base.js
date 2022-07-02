import React from "react";
import MenuBar from "../pages/MenuBar";

const Base = ({ children }) => {
  return (
    <>
      <MenuBar />
      <div>{children}</div>
    </>
  );
};

export default Base;
