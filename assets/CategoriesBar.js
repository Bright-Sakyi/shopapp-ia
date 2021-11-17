import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./colors";

const CategoriesBar =({ categories }) => {
    const  { category } = categories;
    return (

        <View style ={ styles.container}>
            <Text style= {{color: "white", textAlign:"center", fontSize: 16}}>
                {{category}}
            </Text>

        </View>
    );
};

export default CategoriesBar;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: colors.primary,
        padding: 10,
        paddingHorizontal: 15
    },
});