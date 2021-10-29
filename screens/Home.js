import React from "react";
import { SafeAreaView, Dimensions, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Login from "./Login";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const { width } = Dimensions.get("screen");

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={style.header}>
                <Icon name="sort-variant" size={30} color={"Black"} />
                <Icon name="cart-outline" size={30} color={"Black"} />
            </View>
            <ScrollView></ScrollView>


        </SafeAreaView>
    );
};






const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between"

    },
});
