import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Search2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.search2}>
      <View style={styles.scroll1}>
        <View style={styles.frameView}>
          <View style={styles.scroll}>
            <View style={styles.groupView2}>
              <View style={styles.groupView}>
                <View style={styles.rectangleView} />
                <View style={styles.rectangleView1} />
              </View>
              <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
              <Text style={styles.nO281}>{`NO.281 `}</Text>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector22.png")}
              />
              <Text style={styles.bangkokKabinBuri}>Bangkok - Kabin buri</Text>
              <View style={styles.groupView1}>
                <Text style={styles.bangkok}>Bangkok</Text>
                <Text style={styles.text}>8:00</Text>
                <Text style={styles.arr}>Arr.</Text>
                <Text style={styles.dep}>Dep.</Text>
                <Text style={styles.text1}>8:54</Text>
                <Text style={styles.praChomKlao}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon}
                  resizeMode="cover"
                  source={require("../assets/arrow-2.png")}
                />
              </View>
            </View>
            <View style={styles.groupView5}>
              <View style={styles.groupView3}>
                <View style={styles.rectangleView2} />
                <View style={styles.rectangleView3} />
              </View>
              <Text style={styles.oRDINARY1}>{`ORDINARY `}</Text>
              <Text style={styles.nO283}>{`NO.283 `}</Text>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector22.png")}
              />
              <Text style={styles.bangkokBanPluTaLuang}>
                Bangkok - Ban Plu ta Luang
              </Text>
              <View style={styles.groupView4}>
                <Text style={styles.bangkok1}>Bangkok</Text>
                <Text style={styles.text2}>6:55</Text>
                <Text style={styles.arr1}>Arr.</Text>
                <Text style={styles.dep1}>Dep.</Text>
                <Text style={styles.text3}>8:09</Text>
                <Text style={styles.praChomKlao1}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon1}
                  resizeMode="cover"
                  source={require("../assets/arrow-2.png")}
                />
              </View>
            </View>
            <View style={styles.groupView8}>
              <View style={styles.groupView6}>
                <View style={styles.rectangleView4} />
                <View style={styles.rectangleView5} />
              </View>
              <Text style={styles.oRDINARY2}>{`ORDINARY `}</Text>
              <Text style={styles.nO391}>{`NO.391 `}</Text>
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("../assets/vector24.png")}
              />
              <Text style={styles.bangkokChachoengsaoJunction}>
                Bangkok-Chachoengsao Junction
              </Text>
              <View style={styles.groupView7}>
                <Text style={styles.bangkok2}>Bangkok</Text>
                <Text style={styles.text4}>16:55</Text>
                <Text style={styles.arr2}>Arr.</Text>
                <Text style={styles.dep2}>Dep.</Text>
                <Text style={styles.text5}>17:48</Text>
                <Text style={styles.praChomKlao2}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon2}
                  resizeMode="cover"
                  source={require("../assets/arrow-25.png")}
                />
              </View>
            </View>
            <View style={styles.groupView11}>
              <View style={styles.groupView9}>
                <View style={styles.rectangleView6} />
                <View style={styles.rectangleView7} />
              </View>
              <Text style={styles.oRDINARY3}>{`ORDINARY `}</Text>
              <Text style={styles.nO279}>{`NO.279 `}</Text>
              <Image
                style={styles.vectorIcon3}
                resizeMode="cover"
                source={require("../assets/vector24.png")}
              />
              <Text style={styles.bangkokBanKlongLukBorder}>
                Bangkok- Ban Klong Luk Border
              </Text>
              <View style={styles.groupView10}>
                <Text style={styles.bangkok3}>Bangkok</Text>
                <Text style={styles.text6}>13:05</Text>
                <Text style={styles.arr3}>Arr.</Text>
                <Text style={styles.dep3}>Dep.</Text>
                <Text style={styles.text7}>13:45</Text>
                <Text style={styles.praChomKlao3}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon3}
                  resizeMode="cover"
                  source={require("../assets/arrow-25.png")}
                />
              </View>
            </View>
            <View style={styles.groupView14}>
              <View style={styles.groupView12}>
                <View style={styles.rectangleView8} />
                <View style={styles.rectangleView9} />
              </View>
              <Text style={styles.oRDINARY4}>{`ORDINARY `}</Text>
              <Text style={styles.nO379}>{`NO.379 `}</Text>
              <Image
                style={styles.vectorIcon4}
                resizeMode="cover"
                source={require("../assets/vector24.png")}
              />
              <Text style={styles.bangkokChachoengsaoJunction1}>
                Bangkok-Chachoengsao Junction
              </Text>
              <View style={styles.groupView13}>
                <Text style={styles.bangkok4}>Bangkok</Text>
                <Text style={styles.text8}>16:35</Text>
                <Text style={styles.arr4}>Arr.</Text>
                <Text style={styles.dep4}>Dep.</Text>
                <Text style={styles.text9}>17:27</Text>
                <Text style={styles.praChomKlao4}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon4}
                  resizeMode="cover"
                  source={require("../assets/arrow-25.png")}
                />
              </View>
            </View>
            <View style={styles.groupView17}>
              <View style={styles.groupView15}>
                <View style={styles.rectangleView10} />
                <View style={styles.rectangleView11} />
              </View>
              <Text style={styles.oRDINARY5}>{`ORDINARY `}</Text>
              <Text style={styles.nO277}>{`NO.277 `}</Text>
              <Image
                style={styles.vectorIcon5}
                resizeMode="cover"
                source={require("../assets/vector24.png")}
              />
              <Text style={styles.bangkokKabinBuri1}>Bangkok-Kabin Buri</Text>
              <View style={styles.groupView16}>
                <Text style={styles.bangkok5}>Bangkok</Text>
                <Text style={styles.text10}>15:25</Text>
                <Text style={styles.arr5}>Arr.</Text>
                <Text style={styles.dep5}>Dep.</Text>
                <Text style={styles.text11}>16:15</Text>
                <Text style={styles.praChomKlao5}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon5}
                  resizeMode="cover"
                  source={require("../assets/arrow-25.png")}
                />
              </View>
            </View>
            <View style={styles.groupView20}>
              <View style={styles.groupView18}>
                <View style={styles.rectangleView12} />
                <View style={styles.rectangleView13} />
              </View>
              <Text style={styles.oRDINARY6}>{`ORDINARY `}</Text>
              <Text style={styles.nO289}>{`NO.289 `}</Text>
              <Image
                style={styles.vectorIcon6}
                resizeMode="cover"
                source={require("../assets/vector22.png")}
              />
              <Text style={styles.bangkokChachoengsaoJunction2}>
                {" "}
                Bangkok-Chachoengsao Junction
              </Text>
              <View style={styles.groupView19}>
                <Text style={styles.bangkok6}>Bangkok</Text>
                <Text style={styles.text12}>12:10</Text>
                <Text style={styles.arr6}>Arr.</Text>
                <Text style={styles.dep6}>Dep.</Text>
                <Text style={styles.text13}>13:00</Text>
                <Text style={styles.praChomKlao6}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon6}
                  resizeMode="cover"
                  source={require("../assets/arrow-2.png")}
                />
              </View>
            </View>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-7071.png")}
            />
            <Pressable
              style={styles.detail}
              onPress={() => navigation.navigate("Detail")}
            >
              <View style={styles.groupView21}>
                <View style={styles.rectangleView14} />
                <View style={styles.rectangleView15} />
              </View>
              <Text style={styles.oRDINARY7}>{`ORDINARY `}</Text>
              <Text style={styles.nO275}>{`NO.275 `}</Text>
              <Image
                style={styles.vectorIcon7}
                resizeMode="cover"
                source={require("../assets/vector22.png")}
              />
              <Text style={styles.bangkokBanKlongLukBorder1}>
                Bangkok - Ban Klong Luk Border
              </Text>
              <View style={styles.groupView22}>
                <Text style={styles.bangkok7}>Bangkok</Text>
                <Text style={styles.text14}>5:55</Text>
                <Text style={styles.arr7}>Arr.</Text>
                <Text style={styles.dep7}>Dep.</Text>
                <Text style={styles.text15}>6:59</Text>
                <Text style={styles.praChomKlao7}>Pra Chom Klao</Text>
                <Image
                  style={styles.arrowIcon7}
                  resizeMode="cover"
                  source={require("../assets/arrow-2.png")}
                />
              </View>
            </Pressable>
          </View>
        </View>
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
            style={styles.vectorIcon8}
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
            style={styles.vectorIcon9}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.bookmark, styles.ml42]}
          onPress={() => navigation.navigate("Bookmark")}
        >
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-29321.png")}
          />
          <Text style={styles.labelText3}>Bookmark</Text>
        </Pressable>
      </View>
      <View style={styles.background} />
      <View style={styles.bGTOp} />
      <Text style={styles.arrStation}>Arr. Station</Text>
      <Text style={styles.bangkok8}>Bangkok</Text>
      <View style={styles.frameView1}>
        <Image
          style={styles.sysbolIcon}
          resizeMode="cover"
          source={require("../assets/sysbol.png")}
        />
      </View>
      <Text style={styles.banKlongLukBorder}>Ban Klong Luk Border</Text>
      <Text style={styles.depStation}>Dep. Station</Text>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/back6.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 42,
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
  nO281: {
    position: "absolute",
    top: 13,
    left: 43,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokKabinBuri: {
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
    left: 12,
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
    left: 179,
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
    top: 270,
    left: 0,
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
  vectorIcon1: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanPluTaLuang: {
    position: "absolute",
    top: 26,
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
    left: 12,
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
    left: 179,
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
  groupView5: {
    position: "absolute",
    top: 135,
    left: 0,
    width: 296,
    height: 115,
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
  groupView6: {
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
  nO391: {
    position: "absolute",
    top: 13,
    left: 43,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon2: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokChachoengsaoJunction: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok2: {
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
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr2: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep2: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text5: {
    position: "absolute",
    top: 32,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao2: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon2: {
    position: "absolute",
    top: 23,
    left: 59,
    width: 77,
    height: 0,
  },
  groupView7: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView8: {
    position: "absolute",
    top: 945,
    left: 0,
    width: 296,
    height: 115,
  },
  rectangleView6: {
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
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY3: {
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
  vectorIcon3: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "480.87%",
    right: "89.59%",
    bottom: "-400.87%",
    left: "4.04%",
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
  bangkok3: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text6: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr3: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep3: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text7: {
    position: "absolute",
    top: 32,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao3: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon3: {
    position: "absolute",
    top: 23,
    left: 59,
    width: 77,
    height: 0,
  },
  groupView10: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView11: {
    position: "absolute",
    top: 540,
    left: 0,
    width: 296,
    height: 115,
  },
  rectangleView8: {
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
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView12: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY4: {
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
  vectorIcon4: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokChachoengsaoJunction1: {
    position: "absolute",
    top: 26,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok4: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text8: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr4: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep4: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text9: {
    position: "absolute",
    top: 32,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao4: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon4: {
    position: "absolute",
    top: 23,
    left: 59,
    width: 77,
    height: 0,
  },
  groupView13: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView14: {
    position: "absolute",
    top: 810,
    left: 0,
    width: 296,
    height: 115,
  },
  rectangleView10: {
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
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView15: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY5: {
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
  vectorIcon5: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokKabinBuri1: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok5: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text10: {
    position: "absolute",
    top: 34,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr5: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep5: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text11: {
    position: "absolute",
    top: 32,
    left: 178,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao5: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon5: {
    position: "absolute",
    top: 23,
    left: 59,
    width: 77,
    height: 0,
  },
  groupView16: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView17: {
    position: "absolute",
    top: 675,
    left: 0,
    width: 296,
    height: 115,
  },
  rectangleView12: {
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
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView18: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY6: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO289: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon6: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokChachoengsaoJunction2: {
    position: "absolute",
    top: 25,
    left: 76,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    width: 207,
  },
  bangkok6: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text12: {
    position: "absolute",
    top: 34,
    left: 11,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr6: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep6: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text13: {
    position: "absolute",
    top: 32,
    left: 177,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao6: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon6: {
    position: "absolute",
    top: 16,
    left: 59,
    width: 78,
    height: 15,
  },
  groupView19: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  groupView20: {
    position: "absolute",
    top: 405,
    left: 0,
    width: 296,
    height: 115,
  },
  groupIcon: {
    position: "absolute",
    height: "0.57%",
    width: "3.02%",
    top: "64.02%",
    right: "2.34%",
    bottom: "35.41%",
    left: "94.64%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView14: {
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
  rectangleView15: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f05a22",
    width: 296,
    height: 45,
  },
  groupView21: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  oRDINARY7: {
    position: "absolute",
    top: 25,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO275: {
    position: "absolute",
    top: 13,
    left: 42,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon7: {
    position: "absolute",
    height: "20%",
    width: "6.38%",
    top: "11.3%",
    right: "89.59%",
    bottom: "68.7%",
    left: "4.04%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanKlongLukBorder1: {
    position: "absolute",
    top: 25,
    left: 106,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkok7: {
    position: "absolute",
    top: 15,
    left: 0,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text14: {
    position: "absolute",
    top: 34,
    left: 12,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  arr7: {
    position: "absolute",
    top: 0,
    left: 15,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  dep7: {
    position: "absolute",
    top: 0,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
  },
  text15: {
    position: "absolute",
    top: 32,
    left: 179,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  praChomKlao7: {
    position: "absolute",
    top: 15,
    left: 150,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon7: {
    position: "absolute",
    top: 16,
    left: 59,
    width: 78,
    height: 15,
  },
  groupView22: {
    position: "absolute",
    top: 55,
    left: 30,
    width: 235,
    height: 51,
  },
  detail: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 296,
    height: 115,
  },
  scroll: {
    position: "absolute",
    top: 1,
    left: 1,
    width: 296,
    height: 1573,
  },
  frameView: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 300,
    height: 548,
  },
  scroll1: {
    position: "absolute",
    top: 242,
    left: 30,
    width: 300,
    height: 558,
    overflow: "hidden",
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
    color: "#f05a22",
    textAlign: "center",
  },
  vectorIcon8: {
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
  vectorIcon9: {
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
  groupIcon1: {
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
  background: {
    position: "absolute",
    top: 214,
    left: 359,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ff8a00",
    shadowColor: "rgba(218, 218, 218, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 360,
    height: 214,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  bGTOp: {
    position: "absolute",
    top: 91,
    left: 30,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f05a22",
    borderWidth: 1,
    width: 300,
    height: 150,
  },
  arrStation: {
    position: "absolute",
    top: 117,
    left: 86,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Istok Web",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  bangkok8: {
    position: "absolute",
    top: 131,
    left: 85,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  sysbolIcon: {
    position: "relative",
    width: 16,
    height: 80,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 126,
    left: 55,
    borderRadius: 12,
    height: 79,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  banKlongLukBorder: {
    position: "absolute",
    top: 203,
    left: 85,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
  },
  depStation: {
    position: "absolute",
    top: 189,
    left: 85,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "Istok Web",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  icon1: {
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
  search2: {
    position: "relative",
    backgroundColor: "#ffe9cf",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Search2;
