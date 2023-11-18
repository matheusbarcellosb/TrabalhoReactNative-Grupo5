import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25aae2'
    },
    containerLogo: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: 'red'
    },
    containerLogin: {
        flex: 0.4,
        // backgroundColor: 'red'
    },
    textoLogin: {
        fontSize: 32,
        color: '#fff',
    },
    logo: {
        width: '80%',
        height: 80,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#e8f6f8",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#36708e'
    },
    containerEntrar: {
        flex: 0.7,
    },
    btnEntrar: {
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: "#5a5a5a",
    },
    textoEntrar: {
        fontSize: 16,
        color: '#fff'
    },
    sombra: {
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    }
})