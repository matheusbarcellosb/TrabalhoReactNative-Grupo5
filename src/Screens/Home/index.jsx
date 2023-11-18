import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import {styles} from './style'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Produtos</Text>
      </View>
      <View style={styles.addProduto}>
        <TextInput
          style={styles.input}
          placeholder='Add produto'
        />
        <TouchableOpacity>
          <FontAwesome5 name="plus-square" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.produtos}>
        <View style={styles.produto}>
          <Image
            source={{ uri: 'https://mallorygroup.vteximg.com.br/arquivos/ids/157398-582-582/7896443137419_1.jpg?v=637388771440000000' }}
            width={70} height={70} />
          <View style={styles.infoProduto}>
            <Text style={styles.textProduto}>Ventilador</Text>
            <Text style={styles.textProduto}>Mondial</Text>
            <Text style={styles.preco}>R$1999,99</Text>
          </View>

        </View>
        <View style={styles.linha}></View>
      </View>

    </View>
  )
}

export default Home