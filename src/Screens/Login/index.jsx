import React, { useState, useContext, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert, BackHandler } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from '../../Context/AuthContext'
import { styles } from './style'
import Desconectado from "../Desconectado";
import NetInfo from "@react-native-community/netinfo";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [conectado, setConectado] = useState(true)

  const { signin } = useContext(AuthContext);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  }, [])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConectado(state.isConnected)
    })
    return () => unsubscribe();
  }, [])

  return (

    <SafeAreaView style={styles.fullScreen}>

      {conectado ? (

        <View style={styles.container}>

          <View style={styles.containerLogo}>
            <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
          </View>

          <TextInput
            style={[styles.input, styles.sombra]}
            label='E-mail'
            selectionColor='#000'
            textColor='#000'
            underlineColor='#5a5a5a'
            activeUnderlineColor='#efb804'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={[styles.input, styles.sombra]}
            label='Senha'
            selectionColor='#000'
            textColor='#000'
            underlineColor='#5a5a5a'
            activeUnderlineColor='#efb804'
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />

          <View style={[styles.containerEntrar]}>
            <TouchableOpacity style={[
              styles.btnEntrar,
              {
                backgroundColor: (email !== '' && senha !== '') ? '#f6be00' : '#5a5a5a',
                borderColor: (email !== '' && senha !== '') ? '#11111f' : '#000',
              },
              styles.sombra
            ]} onPress={() => signin(email, senha)}>
              <Text style={styles.textoEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Desconectado />
      )
      }

    </SafeAreaView>
  )
}

export default Login;

