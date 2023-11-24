import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Login } from '../Screens/Login'
import { SplashScreen } from '../Screens/SplashScreen'
import { Produto } from '../Screens/Produto'
import Tabs from './tab'
import Editar from '../Screens/EditarProdutos'


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
          component={Tabs}
          options={{
            headerShown: false
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
        <Screen
          name="Editar"
          component={Editar}
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
