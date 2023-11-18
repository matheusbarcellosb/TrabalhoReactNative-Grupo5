import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'

export const Login = () => {

  const navigation = useNavigation()

  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    if (senha === '' || email === '') {
      Alert.alert('Preencha os campos')
    }
    else if (senha !== "admin" && email !== "admin") {
      Alert.alert('Senha ou email incorreto')
    }
    else
      navigation.navigate('Home')
  }

  return (
    <>
      <SafeAreaView style={styles.fullScreen}>

        <View style={styles.container}>

          <View style={styles.containerLogo}>
            <Image resizeMode='contain' style={styles.logo} source={require('../../../assets/logo_grupo_5.png')} />
          </View>

          {/* 
          <View style={styles.containerLogin}>
            <Text style={styles.textoLogin}>Login</Text>
          </View> 
          */}

          <TextInput
            style={[styles.input, styles.sombra]}
            placeholder='E-mail'
            placeholderTextColor='#185881'
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={[styles.input, styles.sombra]}
            placeholder='Senha'
            placeholderTextColor='#185881'
            value={senha}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
          />

          <View style={[styles.containerEntrar]}>
            <TouchableOpacity style={[
              styles.btnEntrar,
              {
                backgroundColor: (email !== '' && senha !== '') ? '#75C2F6' : '#5a5a5a',
                borderColor: (email !== '' && senha !== '') ? '#024873' : '#000',
              },
              styles.sombra
            ]} onPress={handleLogin}>
              <Text style={styles.textoEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    </>
  )
}

