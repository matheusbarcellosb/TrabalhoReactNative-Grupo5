import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../Screens/Home'
import  Login  from '../Screens/Login'
import { SplashScreen } from '../Screens/SplashScreen'
import { Produto } from '../Screens/Produto'
import Tabs from './tab'
import { AuthContext } from '../Context/AuthContext'



const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = () => {

  const { user, verificaNivelAcesso } = useContext(AuthContext);
  console.log(user);

  return (
   <NavigationContainer>

      <Navigator>
      
      {user ? (
          <>
            <Screen name="Home" component={Tabs}  options={{
               headerShown: false 
              }}/>
            {verificaNivelAcesso("admin") && (
              <Screen
              name="admin"
              component={Tabs}
              options={{
               headerShown: false 
              }}
            />
            )}
          </>
        ) : (
          <>
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
          </>
        )}
       
        {/* <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        /> */}
        
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
