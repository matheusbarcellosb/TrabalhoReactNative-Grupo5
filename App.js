import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/Routes/stack';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style='light'/>
    </>
  );
}
