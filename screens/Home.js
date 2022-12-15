import * as React from "react";
import { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const Home = () => {
  const navigation = useNavigation();
  const [dropDownHomeOpen, setDropDownHomeOpen] = useState(false);
  const [dropDownHomeValue, setDropDownHomeValue] = useState("");
  const [dropDownHomeItems, setDropDownHomeItems] = useState([
    { value: "Pra chom Klao", label: "Pra chom Klao" },
    { value: "Urupong", label: "Urupong" },
    { value: "Phaya Thai", label: "Phaya Thai" },
    { value: "Makkasan", label: "Makkasan" },
    { value: "Asoke", label: "Asoke" },
    { value: "Klongton", label: "Klongton" },
    { value: "Sukhumvit 71", label: "Sukhumvit 71" },
    { value: "Hua Mak", label: "Hua Mak" },
    { value: "Ban Thap Chang", label: "Ban Thap Chang" },
    { value: "Soi Wat Lanbun", label: "Soi Wat Lanbun" },
    { value: "Lat Krabang", label: "Lat Krabang" },
    { value: "King Mongkut", label: "King Mongkut" },
    { value: "Skewered heads", label: "Skewered heads" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },
    { value: "Rajprarop", label: "Rajprarop" },

  ]);

  return (  <View style={styles.homeBG}>
            <View style={styles.home2}>
      <View style={styles.groupView}>
        <View style={styles.homeBGOR} />
        <Text style={styles.home}>Home</Text>
        <Text style={styles.welcomeToTrainjung}>Welcome to trainjung</Text>
      </View>
      <Pressable
        style={styles.notiBotton}
        onPress={() => navigation.navigate("Notification")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/Noti.png")}
        />
      </Pressable>
      <StatusBar barStyle="default" />
      <Text style={styles.available}>Available</Text>
      <Pressable style={styles.groupPressable}>
        <View style={styles.groupView1}>
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
        <View style={styles.groupView2}>
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
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-91.png")}
        />
      </Pressable>
      <Pressable style={styles.groupPressable1}>
        <View style={styles.groupView3}>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
        </View>
        <Text style={styles.oRDINARY1}>{`ORDINARY `}</Text>
        <Text style={styles.nO277}>{`NO.277 `}</Text>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokKabinBuri}>Bangkok-Kabin Buri</Text>
        <View style={styles.groupView4}>
          <Text style={styles.bangkok1}>Bangkok</Text>
          <Text style={styles.text2}>15:25</Text>
          <Text style={styles.arr1}>Arr.</Text>
          <Text style={styles.dep1}>Dep.</Text>
          <Text style={styles.text3}>16:15</Text>
          <Text style={styles.praChomKlao1}>Pra Chom Klao</Text>
          <Image
            style={styles.arrowIcon1}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.groupIcon1}
        resizeMode="cover"
        source={require("../assets/group-91.png")}
      />
      <Pressable style={styles.homeTrainINFO}>
        <View style={styles.groupView5}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
        </View>
        <Text style={styles.oRDINARY2}>{`ORDINARY `}</Text>
        <Text style={styles.nO283}>{`NO.283 `}</Text>
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanPluTaLuang}>
          Bangkok - Ban Plu ta Luang
        </Text>
        <View style={styles.groupView6}>
          <Text style={styles.praChomKlao2}>Pra chom Klao</Text>
          <Text style={styles.text4}>8:10</Text>
          <Text style={styles.arr2}>Arr.</Text>
          <Text style={styles.dep2}>Dep.</Text>
          <Text style={styles.text5}>9:48</Text>
          <Text style={styles.chonBuri}>Chon buri</Text>
          <Image
            style={styles.arrowIcon2}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group-91.png")}
      />
      <Image
        style={styles.hamburgerMenuIcon}
        resizeMode="cover"
        source={require("../assets/hamburger-menu.png")}
      />
      <Pressable
        style={styles.bottomTab}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.home1}>
          <Text style={styles.labelText}>Home</Text>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
        </View>
        <Pressable
          style={[styles.search, styles.ml42]}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.labelText1}>Search</Text>
          <Image
            style={styles.vectorIcon3}
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
            style={styles.vectorIcon4}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bookmark, styles.ml42]}
          onPress={() => navigation.navigate("Bookmark")}
        >
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-29321.png")}
          />
          <Text style={styles.labelText3}>Bookmark</Text>
        </Pressable>
      </Pressable>
      <View style={styles.dropDownHome}>
        <DropDownPicker
          open={dropDownHomeOpen}
          setOpen={setDropDownHomeOpen}
          value={dropDownHomeValue}
          setValue={setDropDownHomeValue}
          placeholder="Station Name"
          items={dropDownHomeItems}
          labelStyle={styles.dropDownHomeValue}
          textStyle={styles.dropDownHomeText}
        />
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 42,
  },
  dropDownHomeValue: {
    color: "#030303",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  dropDownHomeText: {
    color: "#b3b3b3",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  notiBotton: {
    position: "absolute",
    left: 270,
    top: 70,
    width: 57,
    height: 57,
  },
  homeBGOR: {
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
    height: 172,
  },
  home: {
    position: "absolute",
    top: 29,
    left: 17,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  welcomeToTrainjung: {
    position: "absolute",
    top: 59,
    left: 17,
    fontSize: 15,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 63,
    left: 14,
    width: 331,
    height: 172,
  },
  available: {
    position: "absolute",
    top: 266,
    left: 22,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#333",
    textAlign: "left",
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
  groupView1: {
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
  groupView2: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupIcon: {
    position: "absolute",
    height: "17.28%",
    width: "3.42%",
    top: "7.83%",
    right: "2.32%",
    bottom: "74.89%",
    left: "94.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable: {
    position: "absolute",
    top: 570,
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
  rectangleView2: {
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY1: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO277: {
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
  bangkokKabinBuri: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok1: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr1: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep1: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text3: {
    position: "absolute",
    top: 32,
    left: 178,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao1: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon1: {
    position: "absolute",
    top: 16,
    left: 59,
    width: 78,
    height: 15,
  },
  groupView4: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupPressable1: {
    position: "absolute",
    top: 435,
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
  groupIcon1: {
    position: "absolute",
    height: "2.48%",
    width: "2.81%",
    top: "55.5%",
    right: "10.8%",
    bottom: "42.02%",
    left: "86.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView4: {
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
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY2: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO283: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon2: {
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
  bangkokBanPluTaLuang: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  praChomKlao2: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    top: 34,
    left: 30,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr2: {
    position: "absolute",
    top: 0,
    left: 32,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep2: {
    position: "absolute",
    top: 0,
    left: 196,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    top: 32,
    left: 196,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  chonBuri: {
    position: "absolute",
    top: 15,
    left: 181,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon2: {
    position: "absolute",
    top: 17,
    left: 93,
    width: 78,
    height: 15,
  },
  groupView6: {
    position: "absolute",
    top: 55,
    left: 29,
    width: 237,
    height: 51,
  },
  homeTrainINFO: {
    position: "absolute",
    top: 304,
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
  groupIcon2: {
    position: "absolute",
    height: "0.27%",
    width: "3.3%",
    top: "40.73%",
    right: "9.48%",
    bottom: "59%",
    left: "87.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  hamburgerMenuIcon: {
    position: "absolute",
    top: 316,
    left: 302,
    borderRadius: 2,
    width: 15,
    height: 14,
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
    color: "#f05a22",
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
  home1: {
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
  vectorIcon4: {
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
  groupIcon3: {
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
  dropDownHome: {
    position: "absolute",
    top: 163,
    left: 40,
    width: 271,
    height: 40,
  },
  home2: {
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

export default Home;
