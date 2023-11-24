import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sobre from '../Screens/Sobre';
import Home from '../Screens/Home';
import Cadastro from '../Screens/CadastroProdutos';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Navigator
      initialRouteName='Inicio'
      style={{
        paddingTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: '#101010'
      }}>
      <Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          tabBarActiveTintColor: '#efb804',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: { backgroundColor: '#efb804' }
        }}
      />
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          tabBarActiveTintColor: '#efb804',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: { backgroundColor: '#efb804' }
        }}
      />
      <Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarStyle: { backgroundColor: '#101010' },
          tabBarActiveTintColor: '#efb804',
          tabBarInactiveTintColor: 'white',
          tabBarIndicatorStyle: { backgroundColor: '#efb804' }
        }}
      />
    </Navigator>
  );
}

export default Tabs;
