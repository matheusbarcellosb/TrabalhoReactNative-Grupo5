import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { styles } from './style'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const buscarDados = async () => {
    try {
      const response = await fetch('https://655d0b9125b76d9884fe535f.mockapi.io/listadeprodutos');
      const data = await response.json();
      setProdutos(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      setLoading(false);
    }
  };

  const filtrarProdutos = () => {
    return produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()));
  }

  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Produtos</Text>
      </View>

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder='Pesquisar'
          onChangeText={(texto) => setPesquisa(texto)}
        />
        <TouchableOpacity style={styles.icone}>
          <FontAwesome5 name="search" size={24} color="gray" />
        </TouchableOpacity>
      </View>


      <View style={styles.produtos}>
        {loading ? (
          <View style={{ marginTop: 250 }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <FlatList
            data={filtrarProdutos()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.produto} key={item.id}>
                  <Image
                    source={{ uri: `${item?.imagem}` }}
                    style={{ width: 70, height: 70 }}
                  />
                  <View style={styles.infoProduto}>
                    <Text style={styles.textProduto}>Nome: {item.nome}</Text>
                    <Text style={styles.textProduto}>Estoque: {item.quantidadeEstoque}</Text>
                    <Text style={styles.preco}>Preço: R$ {item.valorUnitario}.00</Text>
                  </View>
                </View>
                <View style={styles.linha}></View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

    </SafeAreaView>
  )
}

export default Home