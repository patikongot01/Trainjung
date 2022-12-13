import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detail}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Search")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.trainDetails}>Train Details</Text>
      <Image
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-346.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-347.png")}
      />
      <Text style={styles.class3BogieThirdClassCarr}>
        <Text style={styles.class3}>{`Class 3 `}</Text>
        <Text
          style={styles.bogieThirdClass}
        >{`Bogie Third Class Carriage `}</Text>
      </Text>
      <Pressable
        style={styles.viewsNo275TimeTable1}
        onPress={() => navigation.navigate("TimeTable")}
      >
        <Text style={styles.viewsNo275TimeTable}>Views No.275 Time Table</Text>
      </Pressable>
      <Pressable
        style={styles.status}
        onPress={() => navigation.navigate("Bookmark2")}
      >
        <View style={styles.rectangleView1} />
        <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
        <Text style={styles.nO275}>{`NO.275 `}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkok}>Bangkok</Text>
        <Text style={styles.arr}>Arr.</Text>
        <Text style={styles.dep}>Dep.</Text>
        <Text style={styles.banKlongLukBorder}>
          <Text style={styles.banKlong}>{` Ban Klong `}</Text>
          <Text style={styles.lukBorder}>Luk Border</Text>
        </Text>
      </Pressable>
      <Pressable
        style={styles.bottomTab}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.home}>
          <Text style={styles.labelText}>Home</Text>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Pressable
          style={[styles.search, styles.ml42]}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.labelText1}>Search</Text>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.favourite, styles.ml42]}
          onPress={() => navigation.navigate("Favourite")}
        >
          <Text style={styles.labelText2}>Favourite</Text>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bookmark, styles.ml42]}
          onPress={() => navigation.navigate("Bookmark")}
        >
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-29321.png")}
          />
          <Text style={styles.labelText3}>Bookmark</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 42,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  back: {
    position: "absolute",
    left: "5.56%",
    top: "7.88%",
    right: "90.12%",
    bottom: "90.23%",
    width: "4.33%",
    height: "1.9%",
  },
  trainDetails: {
    position: "absolute",
    top: 53,
    left: 106,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  imgIcon: {
    position: "absolute",
    top: 246,
    left: 65,
    width: 229,
    height: 135,
  },
  rectangleView: {
    position: "absolute",
    top: 409,
    left: 65,
    borderRadius: 2,
    backgroundColor: "#fff",
    width: 229,
    height: 33,
  },
  ellipseIcon: {
    position: "absolute",
    top: 404,
    left: 173,
    width: 5,
    height: 5,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 404,
    left: 183,
    width: 5,
    height: 5,
  },
  class3: {
    color: "#000",
  },
  bogieThirdClass: {
    color: "#808080",
  },
  class3BogieThirdClassCarr: {
    position: "absolute",
    top: 421,
    left: 98,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    textAlign: "center",
  },
  viewsNo275TimeTable: {
    fontSize: 10,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  viewsNo275TimeTable1: {
    position: "absolute",
    left: 119,
    top: 454,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 322,
    height: 94,
  },
  oRDINARY: {
    position: "absolute",
    top: 69,
    left: 134,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO275: {
    position: "absolute",
    top: 48,
    left: 140,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "24.47%",
    width: "5.9%",
    top: "18.09%",
    right: "47.2%",
    bottom: "57.45%",
    left: "46.89%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkok: {
    position: "absolute",
    top: 40,
    left: 33,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  arr: {
    position: "absolute",
    top: 20,
    left: 48,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  dep: {
    position: "absolute",
    top: 20,
    left: 254,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  banKlong: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lukBorder: {
    margin: 0,
  },
  banKlongLukBorder: {
    position: "absolute",
    top: 40,
    left: 228,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  status: {
    position: "absolute",
    top: 124,
    left: 18,
    width: 322,
    height: 94,
  },
  labelText: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  icon1: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  home: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  labelText1: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  vectorIcon1: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  search: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  labelText2: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  vectorIcon2: {
    position: "absolute",
    height: "54.05%",
    width: "39.22%",
    top: "0%",
    right: "29.41%",
    bottom: "45.95%",
    left: "31.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  favourite: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  groupIcon: {
    position: "absolute",
    height: "59.46%",
    width: "43.15%",
    top: "-2.7%",
    right: "27.45%",
    bottom: "43.24%",
    left: "29.41%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText3: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#bbb",
    textAlign: "center",
  },
  bookmark: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  bottomTab: {
    position: "absolute",
    top: 723,
    left: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 360,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  detail: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Detail;
