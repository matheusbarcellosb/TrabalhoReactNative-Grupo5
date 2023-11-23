import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010'
  },
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
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    borderRadius: 15
  },
  icone: {
    position: 'absolute',
    marginLeft: 300
  },
  produtos: {
    flex: 1,
    width: '95%',
    backgroundColor: '#f6f7f9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20
  },
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