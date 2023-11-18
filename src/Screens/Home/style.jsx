import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25aae2'
    },
    header: {
      padding: 30,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    addProduto: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      marginHorizontal: 10
    },
    input: {
      backgroundColor: '#e8f6f8',
      width: '90%',
      padding: 10,
      borderRadius: 15
    },
    produtos: {
      flex: 1,
      backgroundColor: '#e8f6f8',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: 20
    },
    produto: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
      margin: 10
    },
    linha: {
      borderBottomWidth: 1,
      marginHorizontal: 20
    },
    textProduto: {
      fontWeight: 'bold',
      fontSize: 18
    },
    infoProduto: {
      width: '72%',
      marginLeft: 10
    },
    preco: {
      alignSelf: 'flex-end',
      fontWeight: 'bold',
      fontSize: 15
    }
  })