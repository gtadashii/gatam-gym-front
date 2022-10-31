import React, { createContext, useMemo, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const initialLogInInfo = { email: '', password: '' };
    const initialSignUpInfo = {
      name: '',
      email: '',
      password: '',
    };

    const [logInInfo, setLogInInfo] = useState(initialLogInInfo);
    const [signUpInfo, setSignUpInfo] = useState(initialSignUpInfo);
    const [logInResponse, setLogInResponse] = useState({
      name: '',
      email: '',
      token: '',
    });

    const clearLogInInfo = () => setLogInInfo(initialLogInInfo);
    const clearSignUpInfo = () => setSignUpInfo(initialSignUpInfo);

    const apiHeaderConfig = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${logInResponse.token}`,
      },
    };  

    const handleLogIn = () =>
      api
        .post("/auth/login", logInInfo, apiHeaderConfig)
        .then((response) => setLogInResponse(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    const handleSignUp = () =>
      api
        .post("/auth/register", signUpInfo, apiHeaderConfig)
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    const value = useMemo(
      () => ({
        logInInfo,
        setLogInInfo,
        signUpInfo,
        setSignUpInfo,
        clearLogInInfo,
        clearSignUpInfo,
        handleLogIn,
        handleSignUp,
        logInResponse,
        apiHeaderConfig
      }),
      [
        logInInfo,
        setLogInInfo,
        signUpInfo,
        setSignUpInfo,
        clearLogInInfo,
        clearSignUpInfo,
        handleLogIn,
        handleSignUp,
        logInResponse,
        apiHeaderConfig
      ]
    );

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;