import { useState } from "react";
import { useLoginUser } from "../utils/UserContext";

function useSignin() {
  const [signInForm, setSignInForm] = useState({
    email: ``,
    password: ``,
    rememberMe: false
  });

  const [formError, setFormError] = useState({
    email: ``,
    password: ``,
    server: ``
  });

  const loginUser = useLoginUser();

  const handleFormChange = (event) => {
    const { value, checked, name } = event.target;
    setFormError({
      email: ``,
      password: ``,
      server: ``
    });

    setSignInForm((prevForm) =>
      name === "rememberMe"
        ? { ...prevForm, [name]: checked }
        : { ...prevForm, [name]: value }
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
    let emailError = ``;
    let passwordError = ``;

    if (!signInForm.email) emailError = `Email can't be empty!`;
    if (!signInForm.password) {
      passwordError = `Password can't be empty!`;
    } else if (signInForm.password.length < 8) {
      passwordError = `Password should be at least 8 characters!`;
    }

    if (emailError || passwordError) {
      setFormError({
        email: emailError,
        password: passwordError
      });
      return;
    }

    let serverError = loginUser(signInForm);

    if (serverError)
      setFormError({
        server: serverError
      });
  };
  return { signInForm, handleFormChange, formError, submitForm };
}

export default useSignin;
