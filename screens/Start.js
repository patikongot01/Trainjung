import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Start = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start}>
      <Text style={styles.tRAINJUNG}>TRAINJUNG</Text>
      <Text style={styles.easyToFollow}>easy to follow</Text>
      <Text style={styles.or}>or</Text>
      <Pressable
        style={styles.enterForAdmin1}
        onPress={() => navigation.navigate("LoginAdmin")}
      >
        <Text style={styles.enterForAdmin}>Enter for Admin</Text>
      </Pressable>
      <Image
        style={styles.img}
        resizeMode="cover"
        source={require("../assets/train-2-1.png")}
      />
      <View style={styles.buttonSearch}>
        <View style={styles.backgroundButton} />
      </View>
      <Pressable
        style={styles.enter1}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.enter}>Enter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tRAINJUNG: {
    position: "absolute",
    top: 396,
    left: 90,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 212,
    height: 54,
  },
  easyToFollow: {
    position: "absolute",
    top: 445,
    left: 150,
    fontSize: 15,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  or: {
    position: "absolute",
    top: 516,
    left: 188,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  enterForAdmin: {
    fontSize: 12,
    textDecoration: "underline",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  enterForAdmin1: {
    position: "absolute",
    left: 153,
    top: 541,
  },
  img: {
    position: "absolute",
    top: 308,
    left: 150,
    width: 88,
    height: 88,
  },
  backgroundButton: {
    position: "absolute",
    top: 2.5,
    left: 13,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 72,
    height: 22,
  },
  buttonSearch: {
    position: "absolute",
    top: 486,
    left: 143,
    width: 72,
    height: 22,
  },
  enter: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 19,
  },
  enter1: {
    position: "absolute",
    left: 168,
    top: 488,
  },
  start: {
    position: "relative",
    backgroundColor: "#ff8a00",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Start;
