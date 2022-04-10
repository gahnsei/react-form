import InputBox from "./InputBox";
import useSignin from "../utils/useSignin";
import { useNavigate } from "react-router";

const SignIn = () => {
  const { signInForm, handleFormChange, formError, submitForm } = useSignin();

  const navigate = useNavigate();

  return (
    <form className="form">
      <h1 className="h1">Sign In</h1>
      <InputBox
        type="text"
        name="email"
        value={signInForm.email}
        handleChange={handleFormChange}
        error={formError.email}
      />
      <InputBox
        type="password"
        name="password"
        value={signInForm.password}
        handleChange={handleFormChange}
        error={formError.password}
      />
      {formError.server && (
        <span className="server-error">{formError.server}</span>
      )}
      <label className="rememberMe-label" htmlFor="rememberMe">
        Remember Me:
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          checked={signInForm.rememberMe}
          onChange={handleFormChange}
        />
      </label>
      <span className="redirect">
        Don't have an account?
        <span onClick={() => navigate("/createaccount")}>
          Create an account
        </span>
      </span>
      <button className="button signin-button" onClick={submitForm}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
