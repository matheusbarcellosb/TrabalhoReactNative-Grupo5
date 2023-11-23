import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import { Login } from '../Screens/Login'
import Sobre from '../Screens/Sobre'



const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Sobre"
          component={Sobre}
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
            // headerShown: false
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
