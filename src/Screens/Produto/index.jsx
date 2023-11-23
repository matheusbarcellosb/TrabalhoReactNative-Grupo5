import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

export const Produto = ({ route }) => {
  const { item } = route?.params

  return (
    <>
      <SafeAreaView style={styles.paginaProduto}>
        <View style={styles.containerProduto}>
        
          {/* Nome produto */}
          <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>{item.nome}</Text>
          </View>

          {/* Imagem produto */}
          <View style={styles.containerImagem}>
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

            <TouchableOpacity style={{ ...styles.botao, backgroundColor: '#fc0137' }}>
              <Text style={styles.textoBotao}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}
