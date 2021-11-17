import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import colors from "./colors";
import { State } from "react-native-gesture-handler";

export default function TopBar( { route }) {
  const navigation = useNavigation();



  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <Feather name="settings" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <FontAwesome name="opencart" size={24} color={colors.icons} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});