import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../Hook/useUser";
import SingleUsers from "../SingleUsers/SingleUsers";

const UsersInfo = () => {
  let { userId } = useParams();
  const allUsers = useUser(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`
  );
  //   console.log(allUsers);
  return (
    <div className="container">
      <h1>Userinfo</h1>
      <SingleUsers user={allUsers[0]}>
        {{ email: allUsers[0]?.email, phone: allUsers[0]?.phone }}
      </SingleUsers>
    </div>
  );
};

export default UsersInfo;
