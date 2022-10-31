import React, { createContext, useMemo, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const initialLogInInfo = { username: '', password: '' };
    const initialSignUpInfo = {
      name: '',
      username: '',
      password: '',
    };

    const [logInInfo, setLogInInfo] = useState(initialLogInInfo);
    const [signUpInfo, setSignUpInfo] = useState(initialSignUpInfo);

    const clearLogInInfo = () => setLogInInfo(initialLogInInfo);
    const clearSignUpInfo = () => setSignUpInfo(initialSignUpInfo);

    const handleLogIn = () => console.log(logInInfo);
    const handleSignUp = () => console.log(signUpInfo);

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
      ]
    );

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;