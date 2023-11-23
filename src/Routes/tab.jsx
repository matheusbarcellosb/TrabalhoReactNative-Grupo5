import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sobre from '../Screens/Sobre';
import Home from '../Screens/Home';
import { Routes } from './stack';
import { NavigationContainer } from '@react-navigation/native';
import { SplashScreen } from '../Screens/SplashScreen';
import { Login } from '../Screens/Login';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function Tabs() {
  return (
      

    <Navigator style={{paddingTop:Platform.OS === "android" ? 25:0, backgroundColor:'#101010'}}>

   
      
      <Screen 
      name="Inicio" 
      component={Home}
      options={{
        tabBarStyle: { backgroundColor: '#101010'},   
        tabBarActiveTintColor: '#efb804',
        tabBarInactiveTintColor: 'white' , 
        tabBarIndicatorStyle: {backgroundColor: '#efb804'} 
      }}
      />
      <Screen 
      name="Sobre" 
      component={Sobre} 
      options={{
        tabBarStyle: { backgroundColor: '#101010'},   
        tabBarActiveTintColor: '#efb804',
        tabBarInactiveTintColor: 'white',
        tabBarIndicatorStyle: {backgroundColor: '#efb804'} 
      }}
      />
    </Navigator>
      
  );
}
     
export default Tabs;
