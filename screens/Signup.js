import React from "react";
import { View, Text, Image, StyleSheet, Button, SafeAreaView, TextInput } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Login from "./Login";
import Icon from "react-native-vector-icons/MaterialIcons"



export default function Signup({ navigation }) {
  return (

    <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "white" }}>
      <Text style={{ color: "Black", fontSize: 50, fontWeight: "700" }}>Create an account,</Text>
      <Text style={{ color: "Black", marginTop: 20 }}>Start shopping wit us</Text>

      <View style={{ marginTop: 10, }}>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Icon name="person-outline" size={22} style={{ marginTop: 22, position: "absolute", color: "blue" }} />
          <TextInput placeholder="Name" style={{ borderColor: "#FFA500", paddingLeft: 30, flex: 1, borderBottomWidth: 0.5, fontSize: 20, marginTop: 13, borderRadius: 10, height: 35, width: "50%", borderWidth: 1 }} />
        </View>

        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Icon name="mail-outline" size={22} style={{ marginTop: 22, position: "absolute", color: "blue" }} />
          <TextInput placeholder="Email" style={{ borderColor: "#FFA500", paddingLeft: 30, flex: 1, borderBottomWidth: 0.5, fontSize: 20, marginTop: 13, borderRadius: 10, height: 35, width: "50%", borderWidth: 1 }} />
        </View>

        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Icon name="lock-outline" size={22} style={{ marginTop: 22, position: "absolute", color: "blue" }} />
          <TextInput placeholder="Password" style={{ borderColor: "#FFA500", paddingLeft: 30, flex: 1, borderBottomWidth: 0.5, fontSize: 20, marginTop: 13, borderRadius: 10, height: 35, width: "50%", borderWidth: 1 }} secureTextEntry />
        </View>

        <View style={{ marginTop: "5%", width: "88%" }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: "#FFA500",
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
        <Text style={{ color: "Black", marginTop: 10 }}>Already having an account? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ color: "#FFA500" }}>Sign in</Text></TouchableOpacity></Text>

      </View>
    </View>

  );

}




