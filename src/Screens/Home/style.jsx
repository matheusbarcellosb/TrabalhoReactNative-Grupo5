import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#efb804'
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010'
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10
  },
  icone: {
    position: 'absolute',
    marginLeft: 300
  },
  input: {
    backgroundColor: '#e8f6f8',
    width: '90%',
    padding: 10,
    borderRadius: 15
  },
  produtos: {
    flex: 1,
    width: '95%',
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
    borderColor: '#efb804',
    marginHorizontal: 20
  },
  textProduto: {
    fontWeight: 'bold',
    fontSize: 14
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