import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  //default axios

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parseData = JSON.parse(data);
      console.log(parseData)
      setAuth({
        ...auth,
        user: parseData,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };