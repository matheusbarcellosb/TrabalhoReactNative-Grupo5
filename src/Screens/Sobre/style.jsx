import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    tudo:{
        backgroundColor: "black",
        flex: 1
    },

    texto:{
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
        
    },

    integrantes:{
    
        fontSize: 20,
        fontWeight: "bold",
        color: "#F2CD00",
        backgroundColor: "black",
        marginTop:-20,
        marginBottom:20,
        

    },

    NomeIntegrante:{

        textAlign: "center",
        color: "white",
         fontWeight: "bold",
         
       
         
    },
    linkedin:{

        textAlign: "center",
        color:"skyblue", 
        fontWeight:'bold'
    },
    GitHub:{

        textAlign: "center",
        color: "#515151", 
        fontWeight: "bold"
    },
    imagem:{
        width: "10%",
         height: 40, 
         borderRadius: 50, 
          left:"45%",
          marginTop:10,
          borderColor:'gold'
    },
    ecommerce:{
        marginTop:10,

    },
    card:{
        borderWidth:2,
        borderColor: 'gold',
        marginBottom:15,
        borderRadius:30,
        width: "80%",
        marginLeft:45,
        marginTop:-5
    }

})