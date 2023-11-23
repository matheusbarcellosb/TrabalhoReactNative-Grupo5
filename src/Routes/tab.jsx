import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Sobre from '../Screens/Sobre';
import Home from '../Screens/Home';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Navigator>
      <Screen 
      name="Inicio" 
      component={Home} 
      />
      <Screen 
      name="Sobre" 
      component={Sobre} 
      />
    </Navigator>
  );
}
export default Tabs;
