import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Welcome to the Blood Bank App Admin Dashboard. 
          This hub allows you to efficiently manage the blood bank's key records. 
          As an admin, you have the capability to delete records from 
          the donor list, hospital list, and organization list, 
          ensuring that outdated or incorrect information is promptly removed. 
          This streamlined interface helps maintain accurate records and keeps 
          the blood bank’s operations running smoothly.


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
