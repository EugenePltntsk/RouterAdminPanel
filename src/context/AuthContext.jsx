import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const login = "Eugene";
const password = "12345";

export const AuthProvider = ({ children }) => {
  const [isLoggedInContext, setIsLoggedInContext] = useState(false);
  const auth = ({ loginUser, passwordUser }) => {
    if (loginUser === login && passwordUser === password) {
      setIsLoggedInContext(true);
      return alert("OK");
    }
    alert("try one more time");
  };

  return (
    <AuthContext.Provider value={{ isLoggedInContext, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
