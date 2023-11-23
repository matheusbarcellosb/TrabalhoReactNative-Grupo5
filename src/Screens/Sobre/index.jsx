import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";




const Sobre = () => {
  return (
    <View style={{backgroundColor:'black'}}>
        <View>
          <Image source={require("../../../assets/logo2.png")}resizeMode="contain"/> 
        </View>

      <View>
        <Text style={{fontSize:30, fontWeight: 'bold',
         color:'#F2CD00', 
         backgroundColor:'black',
         marginTop:50}}>INTEGRANTES GRUPO 5</Text>
      </View>
      <View>
        <Text>ARTHUR DA SILVA MONTEIRO</Text>
        <Text>19 anos, Residente Serratec2023.2</Text>
      </View>
      <Text>LUCAS DE OLIVEIRA MARIANO</Text>
      <Text>33 anos, Residente Serratec2023.2</Text>
      <View>
        <View>
          <Text>MATHEUS BOTELHO DA SILVA BARCELLOS</Text>
          <Text>19 anos, Residente Serratec2023.2</Text>
        </View>
        <View>
          <Text>RAMON GALL DE OLIVEIRA</Text>
          <Text>34 anos, Residente Serratec2023.2 </Text>
        </View>
        <View>
          <Text>THIAGO DA SILVA GARCIA</Text>
          <Text>34 anos, Residente Serratec2023.2</Text>
        </View>
      </View>
    </View>
  );
};

export default Sobre;




