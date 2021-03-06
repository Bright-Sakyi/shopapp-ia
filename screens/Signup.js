import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

export default function Signup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 40 }}>
          <Text style={styles.textbig}>First Time?</Text>
          <Text>Sign up  to view amazing products</Text>
        </View>
        <View style={{ paddingTop: 40 }}>
          <View style={styles.inputcon}>
            <TextInput style={styles.input} placeholder="Name" />
          </View>
          <View style={styles.inputcon}>
            <TextInput style={styles.input} placeholder="Email address" />
          </View>
          <View style={styles.inputcon}>
            <TextInput style={styles.input} placeholder="Password" />
          </View>
        </View>
         <View style={styles.inputcon}>
            <Text 
              style={{ fontSize: 20, 
              color: "white", 
              fontWeight: "600" }}
              >
                Sign In<TouchableOpacity onPress={() => navigation.navigate('Login')
              }><Text style={{ 
                color: "gray",
                alalign: "center"
                }}>Sign up</Text></TouchableOpacity> </Text>
            
          
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text style={{ color: "gray", fontSize: 16 }}>
            Already have an account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ color: "#FFA500", fontSize: 16, fontWeight: "bold" }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#79BCC7",
    paddingHorizontal: 10,
    alignContent: "center",
    paddingBottom: 20,
  },
  textbig: {
    fontSize: 45,
    padding: 5,
    paddingVertical: 30,
    fontWeight: "bold",
  },
  inputcon: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#b8aaa7",
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  signtext: {
    fontSize: 30,
    padding: 5,
    paddingVertical: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8c736d",
    borderRadius: 50,
    padding: 10,
  },
  buttoncon: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});