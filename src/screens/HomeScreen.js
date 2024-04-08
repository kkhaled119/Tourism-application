import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import Destination from "../components/Destination";
import SortCategories from "../components/SortCategories";

import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 50 }}
      >
        {/*Avatar */}
        <View style={styles.avatarMain}>
          <Text style={styles.avatarText}>Explore Places</Text>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={styles.avatarImage}
            />
          </TouchableOpacity>
        </View>
        {/*Search bar */}
        <View style={styles.searchBar}>
          <View style={styles.searchBarMain}>
            <AntDesign name="search1" size={24} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"gray"}
              style={styles.searchBarText}
            />
          </View>
        </View>
        {/*Ctegories*/}
        <View style={styles.categories}>
          <Categories />
        </View>

        {/*SortCtegories*/}
        <View style={styles.sortCategories}>
          <SortCategories />
        </View>

        {/* Destinations */}
        <View>
          <Destination />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatarMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  avatarText: {
    fontSize: wp(7),
    fontWeight: "bold",
    color: "#000",
  },
  avatarImage: {
    height: hp(11),
    width: hp(11),
  },
  searchBar: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  searchBarMain: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    padding: 16,
    paddingLeft: 24,
    gap: 5,
  },
  searchBarText: {
    flex: 1,
    fontSize: wp(4),
    marginBottom: 4,
    paddingLeft: wp(4),
    letterSpacing: 0.5,
  },
  categories:{
    marginBottom:20,
  },
  sortCategories:{
    marginBottom:16,
  }
});
