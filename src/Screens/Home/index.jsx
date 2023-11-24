import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import ListaProdutos from '../../Components/ListaProdutos';
import { AuthContext } from '../../Context/AuthContext';
import { styles } from './style'
import api from '../Services/api'
import NetInfo from '@react-native-community/netinfo'

const Home = () => {

  const { logout } = useContext(AuthContext);

  const [conectado, setConectado] = useState(true);

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');

  const [produtosMapeados, setProdutosMapeados] = useState([])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConectado(state.isConnected)
    })
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    buscarProdutosStorage();
  })

  const buscarProdutosStorage = async () => {
    try {
      const produtosSalvos = await AsyncStorage.getItem('produtos')
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos))
      }
    } catch (erro) {
      console.log('Erro ao carregar produtos ', erro);
    }
  }

  const buscarDados = async () => {
    try {
      const response = await api.get('/listadeprodutos');

      await AsyncStorage.setItem('produtos', JSON.stringify(response.data));
      const getProdutos = await AsyncStorage.getItem('produtos')
      const getProdutosJson = JSON.parse(getProdutos)
      setProdutosMapeados(getProdutosJson)

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
    return conectado ? produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase())) : produtosMapeados.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
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


      <View>
        <Button onPress={logout} mode="elevated">
          Deslogar
        </Button>
      </View>

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