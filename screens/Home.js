import React from "react";
import { SafeAreaView, Text,TextInput, Dimensions, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Login from "./Login";
import products from "../assets/products";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const { width } = Dimensions.get("screen");

export default function Home() {
    const categories = ["Men's clothes", "Women's clothes","Footwaer","Bags","Jewellery"];

    const [categoryIndex,setCategoryIndex] = React.useState(0)
    
    const CategoryList = () => {
        return (
            <View style={style.categoriesContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        activeOpacity={0.8}
                        onPress ={()=>setCategoryIndex(index)}>
                         <Text 
                        style={[
                            style.categoryText,
                            categoryIndex == index && style.categoryTextSelected 
                        ]}>
                        {item}
                    </Text>  
                    </TouchableOpacity>
                         
            ))}
            </View>
        );
    };
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={style.header}>
                <Icon name="sort-variant" size={30} color={"Black"} />
                <Icon name="cart-outline" size={30} color={"Black"} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={style.headerTitle}> Best Products For You</Text>
                <View style={{
                    flexDirection:"row",
                     justifyContent:"space-between",
                     padding:20
                     }}>
                    <View style={style.searchInputContainer}>
                        <Icon name="magnify" color="grey" size={25} />
                        <TextInput placeholder="Search"  style={style.Input}/>
                    </View>
                    <View style={style.sortItems}>
                        <Icon name="tune" color="blue" size={25} />
                    </View>
                </View>
                <Text style={style.categoriesTitle}> Categories </Text>
                    <CategoryList />
                    <FlatList numColumns={2} data={products}/>
                    
            </ScrollView>

        </SafeAreaView>
    );
};






const style = StyleSheet.create({
    categoriesContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 20


    },

    header: {
        paddingHorizontal: 20,
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between"

    },
    headerTitle: {
      fontSize: 23,
      fontWeight: "bold",
      width: "55%",
      lineHeight:30,
      paddingHorizontal:20  
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: "#FFA500",
      flex:1,
      borderRadius:10,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20
    },
    sortItems: {
        backgroundColor: "#FFA500",
        Weight: 50,
        height: 50,
        borderRadius: 5,
        justifyContent:"center",
        alignItems:"center",
        marginLeft: 5
    },
    categoriesTitle: {
       fontSize:18,
       fontWeight:"bold",
       paddingHorizontal: 20,
       
    },
    Input: {
        fontsize: 20,
        fontWeight:"bold",
        color:"black",
        flex: 1 
        
    },
    categoriesContainer:{
        flexDirection: "row",
        marginTop: 30,
        marginBottom:20,
        justifyContent: "space-between"

    },
    categoryText: {
      fontSize:16,
      color: "grey",
      fontWeight:"bold"  
    },
    categoryTextSelected:{
      color:"#FFA500",
      paddingBottom: 5,
      borderBottomWidth:2,
      borderColor:"#FFA500"


    }
    
});
