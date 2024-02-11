import React, { useState, useEffect, ReactNode, useContext } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/post";
import { Navigate, useNavigate } from "react-router-dom";

interface IUser {
  id: number;
  email: string;
  token: string;
}

interface IAuthContext {
  signed: boolean;
  users: IUser | null;
  SignIn(email: string, password: string): void;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);
interface AuthContextProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthContextProps) => {
  const [users, setUser] = useState(null);
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState("");

  function loadStorageData() {
    const storageUser = localStorage.getItem("@RJAuth:user");
    if (storageUser) {
      const storedUser = JSON.parse(storageUser);
      setUser(storedUser.user);
    }
  }
  async function SignIn(email: string, password: string) {
    try {
      const response = await loginUser(email, password);
      if (response.status == 200) {
        toast.success("Logado Com sucesso");
        const userResponse = response.data.data;
        setUser(userResponse.user);
        localStorage.setItem("@RJAuth:user", JSON.stringify(userResponse));
        //return <Navigate replace={true} to={"/"} />;
      }
    } catch (err) {
      console.log(err);
      toast.error("Senha ou Palavra-Passe Incorreta");
    }
  }
  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!users, SignIn, users }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export function useAUth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}
// <AuthContext.Provider value={{ signed: !!users, users, SignIn }}>
// {children}
// </AuthContext.Provider>
