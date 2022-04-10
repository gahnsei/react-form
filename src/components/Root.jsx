import { useNavigate } from "react-router";

const Root = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-root">
      <h1 className="welcome-back">Welcome Back</h1>
      <button
        className="button root-button"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </button>
      <button
        className="button root-button"
        onClick={() => navigate("/createaccount")}
      >
        Create New Account
      </button>
    </div>
  );
};

export default Root;
