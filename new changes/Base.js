import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My title",
  description = "My description",
  className = "text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />

      <div>{children}</div>
      {/* <footer className="footer mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className="btn btn-warning btn-lg">Contact us</button>
        </div>
      </footer> */}
    </div>
  );
};

export default Base;
