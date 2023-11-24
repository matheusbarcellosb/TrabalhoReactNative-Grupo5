import React, { createContext } from "react";

export const MeuContexto = createContext();

export const MeuContextoProvider = ({ children }) => {
  return (
    <MeuContexto.Provider value={'Grupo5'}>
      {children}
    </MeuContexto.Provider>
  );
};

 
