import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    containerCadastro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%'
    },
    containerTitulo: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    titulo: {
        color: '#efb804',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerInput: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        width: '100%',
        marginBottom: 20,
        paddingVertical: 4,
        paddingHorizontal: 4,
        backgroundColor: '#000',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#efb804'
    },
    post: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    botaoPost: {
        backgroundColor: '#efb804',
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoPostDesabilitado: {
        backgroundColor: '#gray',
        paddingHorizontal: 50,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoPost: {
        textAlign: 'center'
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
})