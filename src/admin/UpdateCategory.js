import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getProduct, updateCategory } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";
import SideDrawer from "../components/SideDrawer";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    createdCategory: "",
    formData: "",
  });

  const { name, createdCategory, formData } = values;

  const preload = (categoryId) => {
    getProduct(categoryId).then((data) => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  //TODO: work on it
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    updateCategory(match.params.categoryId, user._id, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          createdCategory: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === event.target.value;
    formData.set(name);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdCategory ? "" : "none" }}
    >
      <h4>{createdCategory} updated successfully</h4>
    </div>
  );

  const UpdateCat = () => (
    // {successMessage()}
    <form>
      <span>Change category name</span>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="name"
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Update Category
      </button>
    </form>
  );
  return (
    <SideDrawer>
      {successMessage()}
      {UpdateCat()}
    </SideDrawer>
  );
};

export default UpdateCategory;
