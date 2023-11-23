import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    containerLogo: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    containerEntrar: {
        flex: 0.6,
    },
    logo: {
        width: '80%',
        height: 80,
    },
    containerLogin: {
        flex: 0.4,
    },
    textoLogin: {
        fontSize: 32,
        color: '#fff',
    },
    input: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: "#e8f6f8",
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