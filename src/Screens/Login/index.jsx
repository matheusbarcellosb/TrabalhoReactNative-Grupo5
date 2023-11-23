import { View, Text, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { TextInput } from 'react-native-paper'
import Desconectado from '../Desconectado'
import NetInfo from '@react-native-community/netinfo'

export const Login = () => {

  useEffect(()=> {
    BackHandler.addEventListener('hardwareBackPress', () => {
        return true
    })
    },[])

  const navigation = useNavigation()

  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')

  const [conectado, setConectado] = useState(true)
  
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConectado(state.isConnected)
    })
    return () => unsubscribe();
  }, [])

  const handleLogin = () => {
    if (senha === '' || email === '') {
      Alert.alert('Preencha os campos')
    }
    else if (senha !== "0" && email !== "0") {
      Alert.alert('Senha ou email incorreto')
    }
    else
      navigation.navigate('Home')
  }

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
            ]} onPress={handleLogin}>
              <Text style={styles.textoEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Desconectado/>
      )
}

      </SafeAreaView>
  )
}

