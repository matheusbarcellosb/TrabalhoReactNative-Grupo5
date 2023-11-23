import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import React from "react";
import { styles } from "./style";

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.tudo}>
      <View style={styles.ecommerce}>
        <Image
          style={{ width: "97%", height: 150, marginTop: 0 }}
          source={require("../../../assets/logo2.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.texto}>
        <Text style={styles.integrantes}>INTEGRANTES GRUPO 5</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={require("../../../assets/arthur.jpg")}
          resizeMode="contain"
        />
        <Text style={styles.NomeIntegrante}>ARTHUR DA SILVA MONTEIRO</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/arthur-da-silva-monteiro-a53a7b285/"
            )
          }
        >
          <Text style={styles.linkedin}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/0ArS0")}
        >
          <Text style={styles.GitHub}>GitHub</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          style={styles.imagem}
          source={require("../../../assets/lucas.jpg")}
          resizeMode="contain"
        />
        <Text style={styles.NomeIntegrante}>LUCAS DE OLIVEIRA MARIANO</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/lucas-oliveira-a84021286/"
            )
          }
        >
          <Text style={styles.linkedin}>Linkedin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/LucasGcoe")}
        >
          <Text style={styles.GitHub}>GitHub</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={require("../../../assets/matheus.jpg")}
              resizeMode="contain"
            />
            <Text style={styles.NomeIntegrante}>
              MATHEUS BOTELHO DA SILVA BARCELLOS
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/matheus-barcellos-88bb3323a/"
                )
              }
            >
              <Text style={styles.linkedin}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://github.com/matheusbarcellosb")
              }
            >
              <Text style={styles.GitHub}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Image
              style={styles.imagem}
              source={require("../../../assets/ramom.jpg")}
              resizeMode="contain"
            />
            <Text style={styles.NomeIntegrante}>RAMON GALL DE OLIVEIRA</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/ramon-gall-de-oliveira-a8914b255/"
                )
              }
            >
              <Text style={styles.linkedin}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/RGOC12")}
            >
              <Text style={styles.GitHub}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.card}>
            <Image
              style={styles.imagem}
              source={require("../../../assets/thiago.jpg")}
              resizeMode="contain"
            />
            <Text style={styles.NomeIntegrante}>THIAGO DA SILVA GARCIA</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/thiago-garcia-dev/"
                )
              }
            >
              <Text style={styles.linkedin}>Linkedin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/Thigoo")}
            >
              <Text style={styles.GitHub}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sobre;
