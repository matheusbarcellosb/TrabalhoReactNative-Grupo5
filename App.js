import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Drawer } from './src/Routes/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './src/Routes/tab';
import { Routes } from './src/Routes/stack';

export default function App() {
  return (
    <>
     
      <StatusBar style='light'/>
      
      <Routes />
    </>
  );
}
