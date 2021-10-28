import React from "react";
import { View, Text, Image , TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Signup from "./Signup";

export default function Login() {
  return (
   <View style= {{backgroundColor:"#12080D", width: "100%", height:"100%", justifyContent: "center" , alignItems: "center", alignSelf: "center"}}>
      <Text style={{ color: "white", fontSize:24, fontWeight:"700"}}>Hello there</Text>
      <Text style={{ color: "white", fontSize:30, fontWeight:"600"}}>Welcome to Spyro's Arena</Text>
      <Text style={{color:"white"}}> Please login for a great experience</Text>

      <TextInput placeholder={"Email Adress"}  
      style={{ borderRadius:10,height: 52 , width: "98%", borderBottomWidth: 1, borderColor:"#FF6EC0", marginTop:30, borderWidth:1}}
      />

      <TextInput placeholder={" Password"} 
      style={{borderRadius:10, height: 52 , width: "98%", borderColor:"#FF6EC0", borderBottomWidth: 1, borderWidth:1, marginTop:20}}
      />




    <View style={{marginTop : "5%", width:"88%"}}>
      <TouchableOpacity 
       style={{ 
         borderWidth: 1,
         backgroundColor:"#FF6EC0",
         height: 42,
         width: "88%",
         justifyContent:"center",
         alignSelf: "center", 
         textAlign: "center",
         borderRadius: 40, 
         marginTop:"50", 
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight:"600"}}>Login</Text>
      </TouchableOpacity>
      
    </View>
    <Text style={{color:"white", marginTop:10}}>Not having an account? <TouchableOpacity onPress={Signup}><Text style={{color:"gray"}}>Sign up</Text></TouchableOpacity></Text> 
   
   
  </View>
  );
}
