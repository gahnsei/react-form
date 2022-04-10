import React from "react";
import { useNavigate } from "react-router";

function NoUser() {
  const navigate = useNavigate();
  return (
    <div className="no-user">
      <h1>
        Seems Like You Aren't Signed In.{<br />} Create An Account Or Sign In.
      </h1>
      <button
        className="button root-button"
        onClick={() => navigate("/createaccount")}
      >
        Create An Account
      </button>
      <button
        className="button root-button"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </button>
    </div>
  );
}

export default NoUser;
