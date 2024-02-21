import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const intialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: "",
  name: "",
  selectedTab: "login",
};

const AuthContext = createContext(intialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModalOpen,
      username,
      email,
      password,
      confirmPassword,
      number,
      selectedTab,
    },
    authDispatch,
  ] = useReducer(authReducer, intialValue);
  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        username,
        email,
        password,
        number,
        selectedTab,
        confirmPassword,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
