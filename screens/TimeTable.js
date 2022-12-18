import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
import { useEffect, useState } from "react";

const TimeTable = ({Navigation, route}) => {
  const navigation = useNavigation();
  const [ items, setItems] = useState([])
  const [tableData, setTableData] = useState([]);
  const HeadTable = ['No.', 'Station', 'Arr.', 'Dep.']

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://shark-app-wblp9.ondigitalocean.app/Table/'+route.params.number);
    const json = await response.json();
    setItems(json);
  }
  fetchData();
}, []);

useEffect(() => {
  const tableData = items.map((item, index) => [index, item.name, item.Arr, item.Dep]);
  setTableData(tableData);
}, [items]);

const widthArr = [30, 130, 50, 100];

  return (
    <View style={styles.homeBG}>
    <View style={styles.timeTable1}>
      <StatusBar barStyle="default" />
      <ScrollView>
      <View style={styles.ScrollViewData}>
      <View style={styles.frameView}>
        <View style={styles.groupView1}>
      <Table>
        <Row data={HeadTable} style={{alignItems: 'center'}} widthArr={widthArr}/>
        <Rows data={tableData} style={{alignItems: 'center'}} widthArr={widthArr}/>
      </Table>
        </View>
      </View>
      </View>
      </ScrollView>
      <View style={styles.BGTable}>
      </View>
      <Text style={styles.timeTable}>Time Table</Text>
      <View style={styles.ststus}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
        </View>
        <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
        <Text style={styles.nO275}>{`No. `}{route.params.number}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanKlongLukBorder}>
          Bangkok - Ban Klong Luk Border
        </Text>
      </View>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
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
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 42,
  },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  row: { height: 40, backgroundColor: 'white' },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  BGTable: {
    position: "absolute",
    top: -10,
    left: 0,
    width: "100%",
    height: 170,
    backgroundColor: "#fff",
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
  timeTable: {
    position: "absolute",
    top: 53,
    left: 115,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 3,
    backgroundColor: "#f05a22",
    width: 279,
    height: 45,
  },
  columnStyles: {
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 279,
    height: 45,
  },
  oRDINARY: {
    position: "absolute",
    top: 26,
    left: 40,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO275: {
    position: "absolute",
    top: 14,
    left: 40,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "51.11%",
    width: "6.81%",
    top: "28.89%",
    right: "89.61%",
    bottom: "20%",
    left: "3.58%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanKlongLukBorder: {
    position: "absolute",
    top: 26,
    left: 105,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  ststus: {
    position: "absolute",
    top: 108,
    left: 40,
    width: 279,
    height: 45,
  },
  rectangleView1: {
    position: "absolute",
    top: 25,
    left: 0,
    backgroundColor: "#fff",
    width: 279,
    height: 751,
  },
  lineIcon: {
    position: "absolute",
    top: 103,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon1: {
    position: "absolute",
    top: 54,
    left: 0,
    width: 279,
    height: 0,
  },
  lineView: {
    position: "absolute",
    top: 0,
    left: 147,
    borderStyle: "solid",
    borderColor: "#d6d6d6",
    borderRightWidth: 0.3,
    width: 0,
    height: 776,
  },
  lineIcon2: {
    position: "absolute",
    top: 0,
    left: 214,
    width: 0,
    height: 518,
  },
  lineIcon3: {
    position: "absolute",
    top: 86,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon4: {
    position: "absolute",
    top: 199,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon5: {
    position: "absolute",
    top: 502,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon6: {
    position: "absolute",
    top: 135,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon7: {
    position: "absolute",
    top: 166,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon8: {
    position: "absolute",
    top: 326,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon9: {
    position: "absolute",
    top: 120,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon10: {
    position: "absolute",
    top: 183,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon11: {
    position: "absolute",
    top: 214,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon12: {
    position: "absolute",
    top: 342,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon13: {
    position: "absolute",
    top: 0,
    left: 22,
    width: 2,
    height: 518,
  },
  lineIcon14: {
    position: "absolute",
    top: 294,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon15: {
    position: "absolute",
    top: 230,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon16: {
    position: "absolute",
    top: 309,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon17: {
    position: "absolute",
    top: 278,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon18: {
    position: "absolute",
    top: 438,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon19: {
    position: "absolute",
    top: 262,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon20: {
    position: "absolute",
    top: 358,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon21: {
    position: "absolute",
    top: 183,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon22: {
    position: "absolute",
    top: 454,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon23: {
    position: "absolute",
    top: 518,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon24: {
    position: "absolute",
    top: 486,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon25: {
    position: "absolute",
    top: 374,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon26: {
    position: "absolute",
    top: 390,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon27: {
    position: "absolute",
    top: 246,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon28: {
    position: "absolute",
    top: 422,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon29: {
    position: "absolute",
    top: 470,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon30: {
    position: "absolute",
    top: 406,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon31: {
    position: "absolute",
    top: 150,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon32: {
    position: "absolute",
    top: 38,
    left: 0,
    width: 279,
    height: 0,
  },
  lineIcon33: {
    position: "absolute",
    top: 70,
    left: 0,
    width: 279,
    height: 0,
  },
  text: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text4: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text6: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text7: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text8: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text10: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text12: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text13: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text14: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text15: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text16: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text17: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text18: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text19: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text20: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text21: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text22: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text23: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text24: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text25: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text26: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text27: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text28: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text29: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text30: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text31: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 24,
    height: 493,
  },
  bangkok: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  phayathai: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  markesan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  asoke: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  khlongTan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  huaMak: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banThapChang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  soiWatLan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  latKrabang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  praChomKlao: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  huaTakhe: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  khlongLuangPhaeng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  klongUdomChonlajorn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  preng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  klongKwaengKlan: {
    margin: 0,
  },
  bangkokPhayathaiMarkesanAso: {
    position: "absolute",
    top: 0,
    left: 24,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text32: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text33: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text34: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text35: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text36: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text37: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text38: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text39: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text40: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text41: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text42: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text43: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text44: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text45: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text46: {
    margin: 0,
  },
  text47: {
    position: "absolute",
    top: 0,
    left: 167,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text48: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text49: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text50: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text51: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text52: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text53: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text54: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text55: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text56: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text57: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text58: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text59: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text60: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text61: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text62: {
    margin: 0,
  },
  text63: {
    position: "absolute",
    top: 0,
    left: 228,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 36,
  },
  khlongBangPhra: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bangToey: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  chachoengsaoJunction: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  phrongAkat: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bangNamPrieo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  khlongSipKao: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  khlongYiSip: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yothaka: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banSang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nongNamKhao: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banPakPhli: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  prachinBuri: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  khokMakok: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  prachantakham: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nongSaeng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banDongBang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLine: {
    margin: 0,
  },
  khlongBangPhraBangToeyCha: {
    position: "absolute",
    top: 239,
    left: 19,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    whiteSpace: "pre-wrap",
    textAlign: "center",
    width: 128,
    height: 252,
  },
  text64: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text65: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text66: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text67: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text68: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text69: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text70: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text71: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text72: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text73: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text74: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text75: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text76: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text77: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text78: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text79: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text80: {
    position: "absolute",
    top: 240,
    left: 157,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 42,
    height: 253,
  },
  text81: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text82: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text83: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text84: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text85: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text86: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text87: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text88: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text89: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text90: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text91: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text92: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text93: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text94: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text95: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text96: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text97: {
    position: "absolute",
    top: 240,
    left: 229,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 34,
    height: 253,
  },
  text98: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text99: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text100: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text101: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text102: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text103: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text104: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text105: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text106: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text107: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text108: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text109: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text110: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text111: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text112: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text113: {
    margin: 0,
  },
  text114: {
    position: "absolute",
    top: 497,
    left: 6,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  banPhromSaeng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banKoDaeng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  kabinBuri: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  kabinKao: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  nongSang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  phraProng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banKaeng: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  salaLamduan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  saKaeo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  thaKasem: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  huaiChot: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  watthanaNakhon: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banPongKom: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  huaiDua: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  aranyaprathet: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  banKlongLuk: {
    margin: 0,
  },
  banPhromSaengBanKoDaengK: {
    position: "absolute",
    top: 497,
    left: 28,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text115: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text116: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text117: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text118: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text119: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text120: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text121: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text122: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text123: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text124: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text125: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text126: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text127: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text128: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text129: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text130: {
    margin: 0,
  },
  text131: {
    position: "absolute",
    top: 497,
    left: 165,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  text132: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text133: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text134: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text135: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text136: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text137: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text138: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text139: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text140: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text141: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text142: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text143: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text144: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text145: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text146: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text147: {
    margin: 0,
  },
  text148: {
    position: "absolute",
    top: 497,
    left: 233,
    fontSize: 11,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  lineIcon34: {
    position: "absolute",
    top: 535,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon35: {
    position: "absolute",
    top: 552,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon36: {
    position: "absolute",
    top: 568,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon37: {
    position: "absolute",
    top: 584,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon38: {
    position: "absolute",
    top: 600,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon39: {
    position: "absolute",
    top: 617,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon40: {
    position: "absolute",
    top: 633,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon41: {
    position: "absolute",
    top: 648,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon42: {
    position: "absolute",
    top: 663,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon43: {
    position: "absolute",
    top: 679,
    left: 3,
    width: 279,
    height: 0,
  },
  ScrollViewData: {
    top: -10,
    left: 0,
    position: "relative",
    flex: 1,
    width: "100%",
    height: 1020,
    overflow: "hidden",
  },
  lineIcon44: {
    position: "absolute",
    top: 695,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon45: {
    position: "absolute",
    top: 711,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon46: {
    position: "absolute",
    top: 729,
    left: 3,
    width: 279,
    height: 0,
  },
  lineIcon47: {
    position: "absolute",
    top: 744,
    left: 3,
    width: 279,
    height: 0,
  },
  no275: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 279,
    height: 753,
  },
  view: {
    position: "absolute",
    top: 0,
    left: 3,
    width: 279,
    height: 778,
  },
  table: {
    position: "absolute",
    top: 168,
    left: 37,
    backgroundColor: "#fff",
    width: 285,
    height: 518,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#f05a22",
    width: 279,
    height: 21,
  },
  station: {
    position: "absolute",
    top: 2,
    left: 63,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  arr: {
    position: "absolute",
    top: 2,
    left: 166,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  dep: {
    position: "absolute",
    top: 2,
    left: 233,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  no: {
    position: "absolute",
    top: 2,
    left: 4,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 1,
    left: 2,
    width: 279,
    height: 21,
  },
  frameView: {
    position: "absolute",
    top: 164,
    left: 52,
    width: 281,
    height: 2200,
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
  timeTable1: {
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

export default TimeTable;
