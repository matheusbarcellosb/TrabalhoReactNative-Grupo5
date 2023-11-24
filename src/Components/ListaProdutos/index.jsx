import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ListaProdutos = ({filtrarProdutos}) => {
  const navigation = useNavigation()

  return (
    <FlatList
      data={filtrarProdutos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Produto', { item })}>
          <View style={styles.produto} key={item.id}>

            <Image
              source={{ uri: `${item?.imagem}` }}
              style={{ width: 80, height: 80, borderWidth: 2, borderColor: '#000', marginBottom: 10 }}
            />
            <Text style={styles.textoProduto}>Nome: </Text>
            <Text style={styles.dadosProduto}>{item.nome}</Text>

            <Text style={styles.textoProduto}>No Estoque: <Text style={styles.dadosProduto}>{item.quantidadeEstoque}</Text></Text>
            <Text style={styles.textoProduto}>Preço: </Text>
            <Text style={styles.dadosProduto}>R$ {item.valorUnitario.toFixed(2)}</Text>

          </View>
          <View style={styles.linha}></View>
        </TouchableOpacity>
      )}
    />
  )
}

export default ListaProdutos

const styles = StyleSheet.create({
  produto: {
    width: '100%',
    alignItems: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  infoProduto: {
    
  },
  dadosProduto: {
    textAlign: 'center',
    fontSize: 14
  },
  textoProduto: {
    fontWeight: 'bold',
    fontSize: 14
  },
  linha: {
    borderBottomWidth: 1,
    borderColor: '#efb804',
    marginHorizontal: 20
  },
})