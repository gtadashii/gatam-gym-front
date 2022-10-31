import React, { createContext, useMemo, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const initialLoginInfo = { username: '', password: '' };
    const initialSignUpInfo = {
      name: '',
      username: '',
      password: '',
    };

    const [loginInfo, setLoginInfo] = useState(initialLoginInfo);
    const [signUpInfo, setSignUpInfo] = useState(initialSignUpInfo);

    const clearLoginInfo = () => setLoginInfo(initialLoginInfo);
    const clearSignUpInfo = () => setSignUpInfo(initialSignUpInfo);

    const value = useMemo(
      () => ({
        loginInfo,
        setLoginInfo,
        signUpInfo,
        setSignUpInfo,
        clearLoginInfo,
        clearSignUpInfo,
      }),
      [
        loginInfo,
        setLoginInfo,
        signUpInfo,
        setSignUpInfo,
        clearLoginInfo,
        clearSignUpInfo,
      ]
    );

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;