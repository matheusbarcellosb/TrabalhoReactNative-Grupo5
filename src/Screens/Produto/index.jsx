import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import api from '../Services/api'
import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native-paper'

export const Produto = ({ route }) => {
  const { item } = route?.params
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const deletarProduto = async (id) => {
    try {
      setLoading(true);

      await api.delete("/listadeprodutos/" + id)

      setTimeout(() => {
        setLoading(false);
        Alert.alert("Produto deletado com Sucesso");
        navigation.goBack();
      }, 2000);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <>
      <SafeAreaView style={styles.paginaProduto}>
        <View style={styles.containerProduto}>

          {/* Nome produto */}
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>{item.nome}</Text>
          </View>

          {/* Imagem produto */}
          <View style={[styles.containerImagem, styles.sombra]}>
            <Image resizeMode='contain' style={styles.imagem} source={{ uri: `${item?.imagem}` }} />
          </View>

          {/* Informacoes do produto */}
          <View style={styles.containerInfo}>
            <Text style={styles.info}>Preço: R$ {item?.valorUnitario.toFixed(2)}</Text>
            <Text style={styles.info}>Estoque: {item.quantidadeEstoque}</Text>
          </View>

          <View style={styles.containerTituloDescricao}>
            <Text style={styles.tituloDescricao}>Descrição do Produto</Text>
          </View>

          <View style={styles.containerDescricao}>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
          
          {/* PUT & DELETE */}
          <View style={styles.botoes}>
            <TouchableOpacity style={{ ...styles.botao, backgroundColor: '#4747ff' }}>
              <Text style={styles.textoBotao}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { deletarProduto(item.id) }} style={{ ...styles.botao, backgroundColor: '#fc0137' }}>
              <Text style={styles.textoBotao}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {loading && (
          <View style={styles.overlay}>
            <ActivityIndicator
              style={{ flex: 1 }}
              size="large"
              color="#fff"
            />
          </View>
        )}
      </SafeAreaView>
    </>
  )
}
