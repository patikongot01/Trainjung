import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeAdmin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeAdmin}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("HomeAdmin3")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.trainjung}>Trainjung</Text>
        <Text style={styles.bangkokStation}>Bangkok Station</Text>
        <Text style={styles.admin}>Admin</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-33635.png")}
        />
      </Pressable>
      <TouchableOpacity
        style={styles.groupTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("AddStatus")}
      >
        <TouchableOpacity
          style={styles.rectangleTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AddStatus")}
        />
        <Text style={styles.addStatus}>Add Status</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.groupTouchableOpacity1}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("HomeAdmin2")}
      >
        <TouchableOpacity
          style={styles.rectangleTouchableOpacity1}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("HomeAdmin2")}
        />
        <Text style={styles.edit}>{`Edit `}</Text>
      </TouchableOpacity>
      <Pressable
        style={styles.groupPressable1}
        onPress={() => navigation.navigate("Add")}
      >
        <TouchableOpacity
          style={styles.rectangleTouchableOpacity2}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Add")}
        />
        <Text style={styles.addDelete}>Add-Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
    backgroundColor: "#ff9a22",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 331,
    height: 110,
  },
  trainjung: {
    position: "absolute",
    top: 32,
    left: 26,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkokStation: {
    position: "absolute",
    top: 62,
    left: 26,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  admin: {
    position: "absolute",
    top: 24,
    left: 26,
    fontSize: 10,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupIcon: {
    position: "absolute",
    top: 19,
    left: 236,
    width: 72,
    height: 72,
  },
  groupPressable: {
    position: "absolute",
    top: 76,
    left: 13,
    width: 331,
    height: 110,
  },
  rectangleTouchableOpacity: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
  },
  addStatus: {
    position: "absolute",
    top: 20,
    left: 21,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupTouchableOpacity: {
    position: "absolute",
    top: 469,
    left: 105,
    width: 150,
    height: 63,
  },
  rectangleTouchableOpacity1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
  },
  edit: {
    position: "absolute",
    top: 17,
    left: 56,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupTouchableOpacity1: {
    position: "absolute",
    top: 277,
    left: 105,
    width: 150,
    height: 63,
  },
  rectangleTouchableOpacity2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
  },
  addDelete: {
    position: "absolute",
    top: 18,
    left: 22,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable1: {
    position: "absolute",
    top: 373,
    left: 105,
    width: 150,
    height: 63,
  },
  homeAdmin: {
    position: "relative",
    backgroundColor: "#ffe9cf",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HomeAdmin;
