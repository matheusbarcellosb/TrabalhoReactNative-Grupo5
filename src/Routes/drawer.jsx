import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import { Login } from '../Screens/Login'
import {Produto} from '../Screens/Produto'
import { SplashScreen } from '../Screens/SplashScreen'
import Sobre from '../Screens/Sobre'
import Tabs from './tab';


const { Navigator, Screen } = createDrawerNavigator()

export const Drawer = () => {
  return (
    <NavigationContainer>
      <Navigator>
      <Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            drawerLabel: () => null
          }}
        />
        
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            drawerLabel: () => null
          }}
        />
        <Screen
          name="Home"
          component={Tabs}
          options={{
             headerShown: false
          }}
        />
        {/* <Screen
          name="Produto"
          component={Produto}
        // options={{
        //   headerShown: false
        // }}
        /> */}
      </Navigator>
    </NavigationContainer>
  )
}
