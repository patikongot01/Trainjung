import * as React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeAdmin2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeAdmin2}>
      <View style={styles.background} />
      <StatusBar barStyle="default" />
      <View style={styles.groupView2}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
        </View>
        <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
        <Text style={styles.nO379}>{`NO.379 `}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokChachoengsaoJunction}>
          Bangkok-Chachoengsao Junction
        </Text>
        <View style={styles.rectangleView2} />
        <View style={styles.rectangleView3} />
        <View style={styles.groupView1}>
          <Text style={styles.bangkok}>Bangkok</Text>
          <Text style={styles.text}>16:35</Text>
          <Text style={styles.arr}>Arr.</Text>
          <Text style={styles.dep}>Dep.</Text>
          <Text style={styles.text1}>17:27</Text>
          <Text style={styles.praChomKlao}>Pra Chom Klao</Text>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </View>
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
      <Text style={styles.edit}>{`Edit `}</Text>
      <Pressable style={styles.rectanglePressable} />
      <Text style={styles.save}>Save</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 104,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255, 138, 0, 0.25)",
    shadowColor: "rgba(255, 138, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 360,
    height: 696,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(19, 19, 19, 0.12)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 296,
    height: 115,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO379: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "20%",
    width: "6.42%",
    top: "11.3%",
    right: "89.53%",
    bottom: "68.7%",
    left: "4.05%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokChachoengsaoJunction: {
    position: "absolute",
    top: 26,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  rectangleView2: {
    position: "absolute",
    top: 88,
    left: 31,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#b4b4b4",
    borderWidth: 1,
    width: 48,
    height: 18,
  },
  rectangleView3: {
    position: "absolute",
    top: 88,
    left: 196,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#b4b4b4",
    borderWidth: 1,
    width: 48,
    height: 18,
  },
  bangkok: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    top: 34,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon: {
    position: "absolute",
    top: 16,
    left: 59,
    width: 78,
    height: 15,
  },
  groupView1: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView2: {
    position: "absolute",
    top: 172,
    left: 32,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 296,
    height: 115,
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
  edit: {
    position: "absolute",
    top: 61,
    left: 161,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  rectanglePressable: {
    position: "absolute",
    top: 58,
    left: 276,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 75,
    height: 34,
  },
  save: {
    position: "absolute",
    top: 64,
    left: 297,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  homeAdmin2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HomeAdmin2;
