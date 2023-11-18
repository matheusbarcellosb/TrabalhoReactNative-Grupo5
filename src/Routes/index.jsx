import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../Screens/Home'
import { Login } from '../Screens/Login'

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
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
        />
      </Navigator>
    </NavigationContainer>
  )
}