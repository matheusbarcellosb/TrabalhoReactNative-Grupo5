import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Drawer } from './src/Routes/drawer';



export default function App() {
  return (
    <>
      <Drawer />
      <StatusBar style='light'/>
    </>
  );
}
