import React from "react";
import { View, Text, Image, TextInput, StyleSheet, Button, scrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Signup from "./Signup";
import Icon from "react-native-vector-icons/MaterialIcons"
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {

  return (

    <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "#ff2d5f" }}>
      <Text style={{ color: "white", fontSize: 50, fontWeight: "700" }}>Welcome Fashionista,</Text>
      <Text style={{ color: "white", marginTop: 20 }}>Sign in to continue</Text>

      <View style={{ marginTop: 10, }}>

        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Icon name="mail-outline" size={22} style={{ marginTop: 22, position: "absolute", color: "blue" }} />
          <TextInput placeholder="Email" style={{ borderColor: "#FF6EC0", paddingLeft: 30, flex: 1, borderBottomWidth: 0.5, fontSize: 20, marginTop: 13, borderRadius: 10, height: 35, width: "50%", borderWidth: 1 }} />
        </View>

        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Icon name="lock-outline" size={22} style={{ marginTop: 22, position: "absolute", color: "blue" }} />
          <TextInput placeholder="Password" style={{ borderColor: "#FF6EC0", paddingLeft: 30, flex: 1, borderBottomWidth: 0.5, fontSize: 20, marginTop: 13, borderRadius: 10, height: 35, width: "50%", borderWidth: 1 }} secureTextEntry />
        </View>

        <View style={{ marginTop: "5%", width: "88%" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: "#FF6EC0",
              height: 42,
              width: "88%",
              justifyContent: "center",
              alignSelf: "center",
              textAlign: "center",
              borderRadius: 40,
              marginTop: "50",
            }}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "600" }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

      </View>
      <Text style={{ color: "white", marginTop: 10 }}>Not having an account? <TouchableOpacity onPress={() => navigation.navigate('Signup')}><Text style={{ color: "gray" }}>Sign up</Text></TouchableOpacity></Text>


    </View>
  );
}
