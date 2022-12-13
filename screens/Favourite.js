import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favourite = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.favourite2}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.favourite}>Favourite</Text>
      <Pressable style={styles.delete}>
        <Pressable style={styles.rectanglePressable} onPress={() => {}} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <TouchableOpacity
        style={styles.detail}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Search2")}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
        </View>
        <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
        <Text style={styles.nO279}>{`NO.279 `}</Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanKlongLukBorder}>
          Bangkok- Ban Klong Luk Border
        </Text>
        <View style={styles.groupView1}>
          <Text style={styles.bangkok}>Bangkok</Text>
          <Text style={styles.text}>13:05</Text>
          <Text style={styles.arr}>Arr.</Text>
          <Text style={styles.dep}>Dep.</Text>
          <Text style={styles.text1}>13:45</Text>
          <Text style={styles.praChomKlao}>Pra Chom Klao</Text>
          <Image
            style={styles.arrowIcon}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.bottomTab}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.labelText}>Home</Text>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.search, styles.ml42]}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.labelText1}>Search</Text>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable style={[styles.favourite1, styles.ml42]}>
          <Text style={styles.labelText2}>Favourite</Text>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector18.png")}
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
      </View>
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
  favourite: {
    position: "absolute",
    top: 52,
    left: 125,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ffe9cf",
    width: 42,
    height: 115,
  },
  vectorIcon: {
    position: "absolute",
    height: "14.78%",
    width: "30.95%",
    top: "46.09%",
    right: "19.05%",
    bottom: "39.13%",
    left: "50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  delete: {
    position: "absolute",
    top: 138,
    left: 299,
    width: 42,
    height: 115,
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
  nO279: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon1: {
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
  bangkokBanKlongLukBorder: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
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
    top: 32,
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
  detail: {
    position: "absolute",
    top: 138,
    left: 18,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 296,
    height: 115,
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
    color: "#f05a22",
    textAlign: "center",
  },
  vectorIcon3: {
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
  favourite1: {
    position: "relative",
    width: 51,
    height: 37,
    flexShrink: 0,
  },
  groupIcon: {
    position: "absolute",
    height: "59.46%",
    width: "43.14%",
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
  favourite2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Favourite;
