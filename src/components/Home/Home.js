import React from "react";
import { Link } from "react-router-dom";
import useUser from "../../Hook/useUser";
import SingleUsers from "../SingleUsers/SingleUsers";

const Home = () => {
  const usersData = useUser("https://jsonplaceholder.typicode.com/users");

  if (usersData.length) {
    usersData.length = 4;
  }

  return (
    <div className="container">
      <h2>Totaal Users: {usersData.length}</h2>
      <div className="row gy-3">
        {usersData?.map((user) => (
          <SingleUsers key={user.id} user={user}></SingleUsers>
        ))}
      </div>
      <Link to="/users">Load More..</Link>
    </div>
  );
};

export default Home;
