import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { cos } from "react-native-reanimated";
import { WebView } from "react-native-webview";
import firebase from "./database/firebase";

// Inicio de aplicación
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Contacto" component={Contacto} />
        <Stack.Screen name="Solucion" component={Solucion} />
        <Stack.Screen name="Iniciar Sesión" component={IniciarSe} />
        <Stack.Screen name="Registrarse" component={Registro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Pantalla de inicio
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.addflex_h}>
        <TouchableOpacity
          style={styles.bthome_b}
          onPress={() => navigation.navigate("Iniciar Sesión")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imghome}
              source={require("./assets/ico/iniciar-s.png")}
            />
            <Text style={styles.txthome_n}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bthome_n}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imghome}
              source={require("./assets/ico/registrarse-b.png")}
            />
            <Text style={styles.txthome_b}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.addflex_h}>
        <TouchableOpacity
          style={styles.bthome_n}
          onPress={() => navigation.navigate("Solucion")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imghome}
              source={require("./assets/ico/solucion-b.png")}
            />
            <Text style={styles.txthome_b}>Solución</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bthome_b}
          onPress={() => navigation.navigate("Contacto")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imghome}
              source={require("./assets/ico/contacto.png")}
            />
            <Text style={styles.txthome_n}>Contacto</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.foter}>
        <Text style={styles.txtFoter}>
          © M.A.T - 2021 | Todos los derechos reservados.
        </Text>
        <Text style={styles.txtFoter}>mat-iot.125mb.com</Text>
      </View>
    </View>
  );
};
// Pantalla de Contacto
const Contacto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={styles.addflex}>
        <Text style={styles.H2}>Sobre My Amazing Tilapia Team</Text>
        <Text style={styles.p}>
          Nuestro principal objetivo es brindar valor a nuestro cliente, por lo
          que buscamos una solucion que le facilite la crianza de tilapias, por
          eso, nuestro equipo cuenta con desarrolladores con habilidades en IoT
          que le permitiran alcanzar este objetivo.
        </Text>
        <View style={styles.cont_img}>
          <Image
            style={styles.img_cont}
            source={require("./assets/img/juan_camilo.png")}
          />
        </View>
        <Text style={styles.name_cont}>Juan Camilo Ramirez</Text>
        <Text style={styles.corr_cont}>jc_ramirez@javeriana.edu.co</Text>
        <View style={styles.cont_img}>
          <Image
            style={styles.img_cont}
            source={require("./assets/img/Sergio.png")}
          />
        </View>
        <Text style={styles.name_cont}>Sergio Guyumus</Text>
        <Text style={styles.corr_cont}>s_guyumus@javeriana.edu.co</Text>
        <View style={styles.cont_img}>
          <Image
            style={styles.img_cont}
            source={require("./assets/img/cristian.png")}
          />
        </View>
        <Text style={styles.name_cont}>Cristian Duran</Text>
        <Text style={styles.corr_cont}>cristianduran@javeriana.edu.co</Text>
      </ScrollView>

      <View style={styles.navi}>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/casa-b.png")}
            />
            <Text style={styles.txtnav}>Inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Solucion")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/solucion-b.png")}
            />
            <Text style={styles.txtnav}>Solución</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Contacto")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/contacto-b.png")}
            />
            <Text style={styles.txtnav}>Contacto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Iniciar Sesión")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/iniciar-s-b.png")}
            />
            <Text style={styles.txtnav}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/registrarse-b.png")}
            />
            <Text style={styles.txtnav}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Pantalla de Solución
const Solucion = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WebView
        textZoom={150}
        source={{
          html: '<iframe width="100%" height="100%" src="http://mat-iot.125mb.com/solucion.html"></iframe>',
        }}
        style={{}}
      />
      <View style={styles.navi}>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/casa-b.png")}
            />
            <Text style={styles.txtnav}>Inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Solucion")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/solucion-b.png")}
            />
            <Text style={styles.txtnav}>Solución</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Contacto")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/contacto-b.png")}
            />
            <Text style={styles.txtnav}>Contacto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Iniciar Sesión")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/iniciar-s-b.png")}
            />
            <Text style={styles.txtnav}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/registrarse-b.png")}
            />
            <Text style={styles.txtnav}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//Pantalla iniciar sesión
const IniciarSe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WebView
        textZoom={150}
        source={{
          html: '<iframe width="100%" height="100%" src="http://mat-iot.125mb.com/login.html"></iframe>',
        }}
        style={{}}
      />
      <View style={styles.navi}>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/casa-b.png")}
            />
            <Text style={styles.txtnav}>Inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Solucion")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/solucion-b.png")}
            />
            <Text style={styles.txtnav}>Solución</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Contacto")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/contacto-b.png")}
            />
            <Text style={styles.txtnav}>Contacto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Iniciar Sesión")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/iniciar-s-b.png")}
            />
            <Text style={styles.txtnav}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/registrarse-b.png")}
            />
            <Text style={styles.txtnav}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//Pantalla Registro
const Registro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <WebView
        textZoom={150}
        source={{
          html: '<iframe width="100%" height="100%" src="http://mat-iot.125mb.com/register.html"></iframe>',
        }}
        style={{}}
      />
      <View style={styles.navi}>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/casa-b.png")}
            />
            <Text style={styles.txtnav}>Inicio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Solucion")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/solucion-b.png")}
            />
            <Text style={styles.txtnav}>Solución</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Contacto")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/contacto-b.png")}
            />
            <Text style={styles.txtnav}>Contacto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Iniciar Sesión")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/iniciar-s-b.png")}
            />
            <Text style={styles.txtnav}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addflex}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <View style={styles.btnnav}>
            <Image
              style={styles.imgnav}
              source={require("./assets/ico/registrarse-b.png")}
            />
            <Text style={styles.txtnav}>Registrarse</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Pantalla todos los controles

// Componentes Reutilizables------------------------------------------------------------------------------------
const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("./assets/img/logo_Mat_Hresolucion-transparente.png")}
      ></Image>
      <Text style={styles.titulo}>M.A.T</Text>
    </View>
  );
};
//Fin de componentes reutilizables

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef",
    //alignItems: "center",
    //justifyContent: "center",
  },

  addflex: {
    flex: 1,
  },

  addflex_h: {
    flex: 0.5,
    flexDirection: "row",
  },

  header: {
    flex: 0.12,
    flexDirection: "row",
    backgroundColor: "#000",
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 50,
    height: 50,
  },

  titulo: {
    fontSize: 35,
    color: "#fff",
    letterSpacing: 5,
  },

  navi: {
    flex: 0.13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10,
  },

  btnnav: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imgnav: {
    width: 35,
    height: 35,
  },

  txtnav: {
    fontSize: 12,
    color: "#DDD",
  },

  H2: {
    fontSize: 27,
    color: "#000",
    paddingHorizontal: 30,
    paddingTop: 20,
    textAlign: "center",
    letterSpacing: 4,
  },

  p: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 20,
    letterSpacing: 2,
  },

  img_cont: {
    width: 100,
    height: 100,
  },

  cont_img: {
    flex: 1,
    alignItems: "center",
  },

  name_cont: {
    fontSize: 27,
    color: "#000",
    paddingHorizontal: 30,
    paddingTop: 10,
    color: "#335",
    textAlign: "center",
  },

  corr_cont: {
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 40,
    paddingTop: 1,
    paddingBottom: 20,
    color: "#559",
  },

  foter: {
    backgroundColor: "#000",
  },

  txtFoter: {
    color: "#fff",
    letterSpacing: 2,
    textAlign: "center",
    fontSize: 12,
    marginHorizontal: 25,
  },

  imghome: {
    width: 100,
    height: 100,
  },

  bthome_b: {
    flex: 1,
    backgroundColor: "#e8e8f5",
  },

  bthome_n: {
    flex: 1,
    backgroundColor: "#112",
  },

  txthome_n: {
    color: "#000",
    fontSize: 18,
    letterSpacing: 3,
    padding: 20,
  },

  txthome_b: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 3,
    padding: 20,
  },

  contFormu: {
    flex: 0.75,
    //alignItems: "center",
    justifyContent: "center",
    margin: 35,
  },

  cont_input: {
    marginHorizontal: 40,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#336",
  },
  contFormu_i: {
    flex: 0.75,
    //alignItems: "center",
    margin: 10,
  },

  btctr: {
    marginTop: 10,
    marginHorizontal: 40,
  },
});
