import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Signup() {
  return (
   <View style= {{flex: 1, justifyContent: "center" , alignItems: "center"}}>
      <Text style={{ color: "black", fontSize:24, fontWeight:"700"}}>Sign up</Text>
      <Text style={{ color: "black", fontSize:30, fontWeight:"600"}}>Create a new account</Text>
      <TouchableOpacity 
       style={{ 
         backgroundColor: "#E8A92C", 
         padding: 10, 
         borderRadius: 10,
         paddingHorizontal:60, 
         marginTop:20, 
        }}
      >
        <Text style={{ fontSize: 20}}>Login with Gmail</Text>
      </TouchableOpacity>
      <TouchableOpacity 
       style={{ 
         backgroundColor: "#B4E825", 
         borderRadius: 10,
         padding: 10, 
         paddingHorizontal:60, 
         marginTop:20, 
        }}
      >
        <Text style={{ fontSize: 20}}>Login with Gmail</Text>
      </TouchableOpacity>


  </View>
  );
}
