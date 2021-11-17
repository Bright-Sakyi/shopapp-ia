import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductBox from "../assets/ProductBox";
import Category from "../assets/Category";

import Categories from "../assets/Categories";
import TopBar from "../assets/TopBar"

export default function Home() {
  const [loadedCat, setLoadedCat] = useState("All");
  const [retrievedCat, setRetrievedCat] = useState();

  useEffect(() => {
    if (loadedCat === "All") {
      setRetrievedCat(Products);
    } else {
      setRetrievedCat(Category[loadedCat]);
    }
  }, [loadedCat]);

  return (
    <SafeAreaView style={styles.page}>
      <TopBar />
      <View>
        <Text style={styles.bigtext}>Discover our exclusive products</Text>
      </View>

      <View style={{ paddingBottom: 10 }}>
        <FlatList
          data={Categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setLoadedCat(item.category)}>
              <CategoriesBar categories={item} />
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            marginVertical: 5,
          }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={retrievedCat}
          renderItem={({ item }) => <ProductBox product={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fcfcfc",
  },

  bigtext: {
    fontSize: 30,
    marginBottom: 20,
  },
});