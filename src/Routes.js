import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Orders from "./admin/Orders";
import Cart from "./core/Cart";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Contact from "./pages/Contact";
import Admin from "./pages/Dashboard/Admin";
import User from "./pages/Dashboard/User";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={User} />
        <AdminRoute path="/admin/dashboard" exact component={Admin} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute
          path="/admin/category/update/:productId"
          exact
          component={UpdateCategory}
        />
        <AdminRoute path="/admin/orders" exact component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
//https://pratik-mytshirtstore.herokuapp.com/api/
