import React from "react";
import { isAutheticated } from "../../auth/helper/index";
import SideDrawer from "../../components/SideDrawer";

const UserDashBoard = () => {
  const {
    user: { name, email },
  } = isAutheticated();

  const AdminRightSide = () => {
    return (
      <>
        <div className="card mb-4">
          <h4 className="card-header">User Information</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge badge-success mr-2">Name:</span> {name}
            </li>
            <li className="list-group-item">
              <span className="badge badge-success mr-2">Email:</span> {email}
            </li>

            <li className="list-group-item">
              <span className="badge badge-danger">User Area</span>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return <SideDrawer children={<AdminRightSide />} />;
};

export default UserDashBoard;
