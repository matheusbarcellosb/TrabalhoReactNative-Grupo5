import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style'

const Desconectado = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="wifi-off" size={100} color="#fff" style={styles.icone}/>
      <Text style={styles.texto}>Você não está conectado com a internet</Text>
    </View>
  )
}

export default Desconectado