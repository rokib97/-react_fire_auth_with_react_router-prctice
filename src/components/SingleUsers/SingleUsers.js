import React from "react";
import { Link } from "react-router-dom";

const SingleUsers = ({ user, children }) => {
  const { name, id } = user || {};
  const { email, phone } = children || {};
  return (
    <div className="col-lg-4">
      <div className="card shadow-sm p-3 mb-5 bg-body rounded ">
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">id: {id}</h6>
          <p className="card-text">{email}</p>
          <p className="card-text">{phone}</p>
          <Link to={`/user/${id}`} className="card-link">
            User Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleUsers;
