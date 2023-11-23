import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { styles } from './style'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../Services/api'

const Home = ({ navigation }) => {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const buscarDados = async () => {
    try {
      const response = await api.get('/listadeprodutos');

      setProdutos(response.data);
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
          placeholder='Pesquisar Produto'
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
        )}
      </View>

    </SafeAreaView>
  )
}

export default Home