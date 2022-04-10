import InputBox from "./InputBox";
import useCreateAccount from "../utils/useCreateAccount";
import { useNavigate } from "react-router";

function CreateAccount() {
  const { newUserForm, handleFormChange, formError, submitForm } =
    useCreateAccount();

  const navigate = useNavigate();

  return (
    <form className="form">
      <h1 className="h1">Create An Account</h1>
      <InputBox
        type="text"
        value={newUserForm.firstName}
        name="firstName"
        id="firstName"
        handleChange={handleFormChange}
        error={formError.firstName}
      />
      <InputBox
        type="text"
        value={newUserForm.lastName}
        name="lastName"
        id="lastName"
        handleChange={handleFormChange}
        error={formError.lastName}
      />
      <InputBox
        type="text"
        value={newUserForm.email}
        name="email"
        id="email"
        handleChange={handleFormChange}
        error={formError.email}
      />
      <InputBox
        type="password"
        value={newUserForm.password}
        name="password"
        id="password"
        handleChange={handleFormChange}
        error={formError.password}
      />
      {formError.server && (
        <span className="server-error">{formError.server}</span>
      )}
      <span className="redirect">
        Already have an account?
        <span onClick={() => navigate(`/signin`)}>Sign In</span>
      </span>
      <button className="button signin-button" onClick={submitForm}>
        Create Account
      </button>
    </form>
  );
}

export default CreateAccount;
