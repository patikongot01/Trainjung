import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import { ProgressBar as RNPProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Bookmark2 = () => {
  const navigation = useNavigation();

  return ( <View style={styles.homeBG}>
    <View style={styles.bookmark2}>
      <View style={styles.rectangleView} />
      <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
      <Text style={styles.nO279}>{`NO.279 `}</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.bangkokBanKlongLukBorder}>
        Bangkok- Ban Klong Luk Border
      </Text>
      <StatusBar barStyle="default" />
      <Pressable style={styles.backIcon} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back6.png")}
        />
      </Pressable>
      <View style={styles.scroll}>
        <View style={styles.station10}>
          <View style={styles.station}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-95.png")}
            />
            <Image
              style={styles.ellipseIcon1}
              resizeMode="cover"
              source={require("../assets/ellipse-90.png")}
            />
            <View style={styles.station1}>
              <Text style={styles.bangkokStation}>Bangkok Station</Text>
              <Text style={styles.text}>05:55</Text>
            </View>
            <View style={styles.station2}>
              <Text style={styles.bangkokStation1}>Phayathai Station</Text>
              <Text style={styles.text1}>06:10</Text>
            </View>
            <View style={styles.station3}>
              <Text style={styles.bangkokStation2}>Markesan Station</Text>
              <Text style={styles.text2}>06:20</Text>
            </View>
            <View style={styles.station4}>
              <Text style={styles.bangkokStation3}>Asoke Station</Text>
              <Text style={styles.text3}>06:26</Text>
            </View>
            <View style={styles.station5}>
              <Text style={styles.bangkokStation4}>Khlong Tan Station</Text>
              <Text style={styles.text4}>06:36</Text>
            </View>
            <View style={styles.station6}>
              <Text style={styles.bangkokStation5}>Hua Mak Station</Text>
              <Text style={styles.text5}>06:43</Text>
            </View>
            <View style={styles.station7}>
              <Text style={styles.bangkokStation6}>Ban Thap Chang Station</Text>
              <Text style={styles.text6}>06:48</Text>
            </View>
            <View style={styles.station8}>
              <Text style={styles.bangkokStation7}>
                Soi Wat Lan Boon Station
              </Text>
              <Text style={styles.text7}>06:52</Text>
            </View>
            <View style={styles.station9}>
              <Text style={styles.bangkokStation8}>Lat Krabang Station</Text>
              <Text style={styles.text8}>06:55</Text>
              <Text style={styles.text9}>Destination</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rectangleView1}>
        <RNPProgressBar
          style={styles.rNPProgressBar}
          progress={0.4}
          color="#ffb300"
        />
      </View>
      <View style={styles.bottomTab}>
        <Pressable
          style={styles.home}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.labelText}>Home</Text>
          <Image
            style={styles.icon}
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
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
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
        <View style={[styles.bookmark, styles.ml42]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-2932.png")}
          />
          <Text style={styles.labelText3}>Bookmark</Text>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rNPProgressBar: {
    width: 648,
    height: 11,
    backgroundColor: "#d9d9d9",
  },
  ml42: {
    marginLeft: 42,
  },
  rectangleView: {
    position: "absolute",
    top: 46,
    left: 0,
    backgroundColor: "#f05a22",
    width: 360,
    height: 65,
  },
  oRDINARY: {
    position: "absolute",
    top: 77,
    left: 86,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO279: {
    position: "absolute",
    top: 65,
    left: 86,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "2.88%",
    width: "5.28%",
    top: "10.25%",
    right: "79.17%",
    bottom: "88.88%",
    left: "15.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanKlongLukBorder: {
    position: "absolute",
    top: 77,
    left: 150,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  backIcon: {
    position: "absolute",
    height: "3.9%",
    width: "9.33%",
    top: "7.88%",
    right: "90.12%",
    bottom: "90.23%",
    left: "3.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  ellipseIcon: {
    position: "absolute",
    top: 621,
    left: 2,
    width: 16,
    height: 16,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 733,
    left: 65,
    width: 20,
    height: 20,
  },
  bangkokStation: {
    position: "absolute",
    marginLeft: -47,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    marginLeft: -47,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station1: {
    position: "absolute",
    marginLeft: -64.5,
    top: 0,
    left: "50%",
    width: 94,
    height: 43,
  },
  bangkokStation1: {
    position: "absolute",
    marginLeft: -50.5,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    marginLeft: -50.5,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station2: {
    position: "absolute",
    marginLeft: -64.5,
    top: 83,
    left: "50%",
    width: 101,
    height: 43,
  },
  bangkokStation2: {
    position: "absolute",
    marginLeft: -50,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    marginLeft: -50,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station3: {
    position: "absolute",
    marginLeft: -64.5,
    top: 161,
    left: "50%",
    width: 100,
    height: 43,
  },
  bangkokStation3: {
    position: "absolute",
    marginLeft: -40,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    marginLeft: -40,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station4: {
    position: "absolute",
    marginLeft: -64.5,
    top: 239,
    left: "50%",
    width: 80,
    height: 43,
  },
  bangkokStation4: {
    position: "absolute",
    marginLeft: -54,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    marginLeft: -54,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station5: {
    position: "absolute",
    marginLeft: -64.5,
    top: 317,
    left: "50%",
    width: 108,
    height: 43,
  },
  bangkokStation5: {
    position: "absolute",
    marginLeft: -48,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    marginLeft: -48,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station6: {
    position: "absolute",
    marginLeft: -64.5,
    top: 395,
    left: "50%",
    width: 96,
    height: 43,
  },
  bangkokStation6: {
    position: "absolute",
    marginLeft: -69.5,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text6: {
    position: "absolute",
    marginLeft: -69.5,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station7: {
    position: "absolute",
    marginLeft: -64.5,
    top: 473,
    left: "50%",
    width: 139,
    height: 43,
  },
  bangkokStation7: {
    position: "absolute",
    marginLeft: -74.5,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text7: {
    position: "absolute",
    marginLeft: -74.5,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  station8: {
    position: "absolute",
    marginLeft: -64.5,
    top: 551,
    left: "50%",
    width: 149,
    height: 43,
  },
  bangkokStation8: {
    position: "absolute",
    marginLeft: -57,
    top: 26,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  text8: {
    position: "absolute",
    marginLeft: -57,
    top: 0,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
  },
  text9: {
    position: "absolute",
    marginLeft: -57,
    top: 88,
    left: "50%",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#263238",
    textAlign: "left",
    width: 76,
    height: 17,
  },
  station9: {
    position: "absolute",
    marginLeft: -64.5,
    top: 629,
    left: "50%",
    width: 114,
    height: 105,
  },
  station: {
    position: "absolute",
    top: 36,
    left: 65,
    width: 169,
    height: 734,
  },
  station10: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: 904,
    overflow: "hidden",
  },
  scroll: {
    position: "absolute",
    top: 111,
    left: 30,
    width: 300,
    height: 689,
  },
  rectangleView1: {
    position: "absolute",
    marginTop: -248,
    marginLeft: -80,
    top: "50%",
    left: "50%",
    borderRadius: 50,
    width: 648,
    height: 11,
    transform: [
      {
        rotate: "90deg",
      },
    ],
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
  icon: {
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
    color: "#f05a22",
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
    top: 670,
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
  bookmark2: {
    top: 20,
    left: 16.5,
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  homeBG: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
  },
});

export default Bookmark2;
