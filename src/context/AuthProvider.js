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

    // TODO: check if {"Content-type": "application/json",} header is necessary
    const authHeader = {
      headers: {
        Authorization: `Bearer ${logInResponse.token}`,
      },
    };  

    const handleLogIn = () =>
      api
        .post("/auth/login", logInInfo)
        .then((response) => setLogInResponse(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    const handleSignUp = () =>
      api
        .post("/auth/register", signUpInfo)
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
        authHeader
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
        authHeader
      ]
    );

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;