
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/Routes/stack';
import "react-native-gesture-handler";
import {MeuContextoProvider} from "./src/Context/Contexto";
import {AuthProvider} from './src/Context/AuthContext'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MeuContextoProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </MeuContextoProvider>
    </>
  );
}
