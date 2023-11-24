import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import { styles } from './style'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../Services/api'
import { useFocusEffect } from '@react-navigation/native';
import ListaProdutos from '../../Components/ListaProdutos';


const Home = () => {

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const buscarDados = async () => {
    try {
      const response = await api.get('/listadeprodutos');

      setProdutos(response.data);
      setLoading(false);
      setTimeout(() => {
        setLoading
      }, 3000)
    } catch (error) {
      console.error('Error', 'Erro ao buscar dados da API:', error);
      Alert.alert('Error', 'Erro ao buscar dados da API:', error)
      setLoading(false);
    }
  };

  const filtrarProdutos = () => {
    return produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()));
  }

  useFocusEffect(
    React.useCallback(() => {
      buscarDados();
    }, [])
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color="#e7cb1f" />
        <Text style={{ color: 'white' }}>Carregando...</Text>
      </SafeAreaView>
    )
  }

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
        ) : (<ListaProdutos filtrarProdutos={filtrarProdutos()} />)}
      </View>
    </SafeAreaView>
  )
}

export default Home