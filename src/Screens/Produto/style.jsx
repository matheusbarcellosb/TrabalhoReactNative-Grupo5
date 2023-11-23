import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    paginaProduto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    containerProduto: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    containerTitulo: {
        padding: 30,
    },
    titulo: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
    },
    containerImagem: {
        width: '95%',
        height: 300,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: '#efb804'
    },
    imagem: {
        width: '100%',
        height: '100%',
        borderRadius: 28,
        position: 'absolute'
    },
    containerInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
    },
    info: {
        fontSize: 16,
        color: '#efb804'
    },
    containerTituloDescricao: {
        padding: 30,
    },
    tituloDescricao: {
        fontSize: 25,
        color: '#fff'
    },
    containerDescricao: {
        alignItems: 'center'
    },
    descricao: {
        textAlign: 'center',
        color: '#fff'
    },
    botoes: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        padding: 30,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        width: '20%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textoBotao: {
        color: '#fff'

    },
    sombra: {
        shadowColor: '#efb804',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
})