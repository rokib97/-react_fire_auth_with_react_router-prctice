import React from "react";
import useUser from "../../Hook/useUser";
import SingleUsers from "../SingleUsers/SingleUsers";

const Users = () => {
  const allUsers = useUser("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="container">
      <div className="row gy-3">
        {allUsers?.map((user) => (
          <SingleUsers key={user.id} user={user}></SingleUsers>
        ))}
      </div>
    </div>
  );
};

export default Users;
