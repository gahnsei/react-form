import React from "react";
import { useCurrentUser } from "../utils/UserContext";
import NoUser from "./NoUser";

function UserAccount() {
  const userInfo = useCurrentUser();

  return userInfo ? (
    <div className="user-info">
      <span className="h1">
        First Name: <span>{userInfo.firstName}</span>
      </span>
      <span className="h1">
        Last Name: <span>{userInfo.lastName}</span>
      </span>
      <span className="h1">
        Email: <span>{userInfo.email}</span>
      </span>
      <span className="h1">
        Password: <span>{userInfo.password}</span>
      </span>
    </div>
  ) : (
    <NoUser />
  );
}

export default UserAccount;
