import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../Screens/Home'
import Sobre from '../Screens/Sobre'
import { Login } from '../Screens/Login'
import { SplashScreen } from '../Screens/SplashScreen'
import { Produto } from '../Screens/Produto'


const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTitleStyle: {
              color: '#efb804',
            },
            headerTintColor: '#efb804',
          }}
        />
        <Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTitleStyle: {
              color: '#efb804',
            },
            headerTintColor: '#efb804',
          }}
        />
        <Screen
          name="Produto"
          component={Produto}
          options={{
            headerStyle: {
              backgroundColor: '#101010',
            },
            headerTitleStyle: {
              color: '#efb804',
            },
            headerTintColor: '#efb804',
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
