import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const signin = (email, senha) => {

      console.log(email, senha);
      if (email === "grupo5@gmail" && senha === "5555") {
        Alert.alert("Usuário Logado com Sucesso!!!");
        setUser({ user: "Grupo5", role: "admin"});
      }else {
      console.log(email, senha);
      Alert.alert("Senha ou email incorreto");
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


