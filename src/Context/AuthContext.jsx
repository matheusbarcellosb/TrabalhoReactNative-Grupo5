import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signin = (email, senha) => {
    // lógica do login com api
    if (email == "0" && senha == "0") {
      console.log("Usuário Logado com Sucesso!!!");
      setUser({ user: "Fulano", role: "admin"});
    }
  };

  const logout = () => {
    setUser(null);
  };

  const verificaNivelAcesso = (permissao) => {
    if (user.role == permissao) return true;
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout, verificaNivelAcesso }}>
      {children}
    </AuthContext.Provider>
  );
};


