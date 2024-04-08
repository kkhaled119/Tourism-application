import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/*Background Color */}
      <Image
        source={require("../../assets/images/west-lake.png")}
        style={styles.image}
      />
      {/*Contents */}
      <View style={styles.gradientView}>
        <LinearGradient
          colors={["transparent", "rgba(3,105,161,0.8)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.gradientLinear}
        />
        <View style={{gap:11}}>
          <Text style={styles.mainTitle}>Discover History's Treasures</Text>
          <Text style={styles.welcomeDescription}>
            Explore the Rich Tapestry of History with Us!
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.explorButton}
        >
          <Text style={styles.explorButtoText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: "100%",
    width: wp(100),
    position: "absolute",
  },
  gradientView: {
    padding: 20,
    paddingBottom: 40,
    gap: 32,
  },
  mainTitle: {
    fontSize: wp(10),
    color: "white",
    fontWeight: "bold",
    lineHeight: wp(12),
  },
  welcomeDescription: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "white",
  },
  explorButton: {
    borderRadius: 50,
    backgroundColor: "white",
    paddingHorizontal: 48,
    padding:12,
    alignSelf:"center",
  },
  explorButtoText: {
    fontSize:wp(5),
    fontWeight:"bold",
    


  },
});
