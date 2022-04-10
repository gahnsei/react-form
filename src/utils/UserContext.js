import React from "react";
import useServer from "./useServer";
import { createContext, useContext } from "react";

const AddUserContext = createContext();
const CurrentUserContext = createContext();
const LoginUserContext = createContext();

export const useAddUser = () => useContext(AddUserContext);
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useLoginUser = () => useContext(LoginUserContext);

export function UserProvider({ children }) {
  const { currentUser, addUser, loginUser } = useServer();

  return (
    <AddUserContext.Provider value={addUser}>
      <CurrentUserContext.Provider value={currentUser}>
        <LoginUserContext.Provider value={loginUser}>
          {children}
        </LoginUserContext.Provider>
      </CurrentUserContext.Provider>
    </AddUserContext.Provider>
  );
}

export default UserProvider;
