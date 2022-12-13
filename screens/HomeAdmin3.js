import * as React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeAdmin3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeAdmin3}>
      <View style={styles.background} />
      <StatusBar barStyle="default" />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-33634.png")}
      />
      <View style={styles.userID1}>
        <View style={styles.rectangleView} />
        <Text style={styles.userID}>User ID</Text>
        <Text style={styles.xxxxxrailwaycoth}>xxxxx@railway.co.th</Text>
      </View>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Pressable
        style={styles.buttonLogin}
        onPress={() => navigation.navigate("LoginAdmin")}
      >
        <View style={styles.backgroundButton} />
        <Text style={styles.logOut}>Log out</Text>
      </Pressable>
      <Text style={styles.recentEdit}>Recent Edit</Text>
      <Text style={styles.noRecent}>No Recent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 176,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255, 138, 0, 0.25)",
    shadowColor: "rgba(218, 218, 218, 0.5)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 360,
    height: 583,
    opacity: 0.5,
  },
  groupIcon: {
    position: "absolute",
    top: 106,
    left: 30,
    width: 33,
    height: 33,
  },
  rectangleView: {
    position: "absolute",
    top: 16,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(255, 233, 207, 0.25)",
    borderStyle: "solid",
    borderColor: "rgba(247, 142, 72, 0.25)",
    borderWidth: 1,
    width: 194,
    height: 20,
  },
  userID: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#ff8a00",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 12,
  },
  xxxxxrailwaycoth: {
    position: "absolute",
    top: 17,
    left: 10,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#b4b4b4",
    textAlign: "center",
  },
  userID1: {
    position: "absolute",
    top: 105,
    left: 74,
    width: 194,
    height: 36,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  back: {
    position: "absolute",
    left: 20,
    top: 63,
    width: 16,
    height: 15,
  },
  backgroundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 300,
    height: 40,
  },
  logOut: {
    position: "absolute",
    top: 11,
    left: 116,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    width: 66,
    height: 17,
  },
  buttonLogin: {
    position: "absolute",
    top: 677,
    left: 29,
    width: 300,
    height: 40,
  },
  recentEdit: {
    position: "absolute",
    top: 198,
    left: 30,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  noRecent: {
    position: "absolute",
    top: 404,
    left: 148,
    fontSize: 12,
    fontStyle: "italic",
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  homeAdmin3: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HomeAdmin3;
