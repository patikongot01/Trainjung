import * as React from "react";
import { useEffect, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from 'axios'
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const Home = () => {
const [ items, setItems] = useState([])
const [ itemsName, setItemsName] = useState([])

  useEffect(() => {
        fetch('https://shark-app-wblp9.ondigitalocean.app/Home')
            .then(res => res.json())
            .then((result) => {
              setItems(result)
            })
      }, [])
  const onPressDetail = (number, name, nameDes, time, timeDes) => {
    navigation.navigate('Detail', {number: number, name: name, nameDes: nameDes, time: time, timeDes: timeDes})
  }
 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [dropDownHomeOpen, setDropDownHomeOpen] = useState(false);
  const [dropDownHomeValue, setDropDownHomeValue] = useState("");
  const [dropDownHomeItems, setDropDownHomeItems] = useState([
    { value: "1", label: "กรุงเทพ" },
    { value: "2", label: "อุรุพงษ์" },
    { value: "3", label: "พญาไท" },
    { value: "4", label: "มักกะสัน" },
    { value: "5", label: "ราชปรารภ" },
    { value: "6", label: "อโศก" },
    { value: "7", label: "คลองตัน" },
    { value: "8", label: "สุขุมวิท 71" },
    { value: "9", label: "หัวหมาก" },
    { value: "10", label: "บ้านทับช้าง" },
    { value: "11", label: "ซอยวัดลานบุญ" },
    { value: "12", label: "ลาดกระบัง" },
    { value: "13", label: "พระจอมเกล้า" },
    { value: "14", label: "หัวตะเข้" },
    { value: "15", label: "คลองหลวงแพ่ง" },
    { value: "16", label: "คลองอุดมชลจร" },
    { value: "17", label: "เปรง" },
    { value: "18", label: "คลองแขวงกลั่น" },
    { value: "19", label: "คลองบางพระ" },
    { value: "20", label: "บางเตย" },
    { value: "21", label: "ชุมทางฉะเชิงเทรา" },
    { value: "22", label: "ดอนสีนนท์" },
    { value: "23", label: "บางน้ำเปรี้ยว" },
    { value: "24", label: "ชุมทางคลองสิบเก้า" },
    { value: "25", label: "พานทอง" },
    { value: "26", label: "โยทะกา" },
    { value: "27", label: "บ้านสร้าง" },
    { value: "28", label: "ชลบุรี" },
    { value: "29", label: "บ้านปากพลี" },
    { value: "30", label: "บางพระ" },
    { value: "31", label: "ปราจีนบุรี" },
    { value: "32", label: "เขาพระบาท" },
    { value: "33", label: "โคกมะกอก" },
    { value: "34", label: "ชุมทางศรีราชา" },
    { value: "35", label: "ประจันตคาม" },
    { value: "36", label: "บางละมุง" },
    { value: "37", label: "บ้านดงบัง" },
    { value: "38", label: "บ้านพรหมแสง" },
    { value: "39", label: "พัทยา" },
    { value: "40", label: "พัทยาใต้" },
    { value: "41", label: "กบินทร์บุรี" },
    { value: "42", label: "บ้านห้วยขวาง" },
    { value: "43", label: "ญาณสังวราราม" },
    { value: "44", label: "หนองสัง" },
    { value: "45", label: "สวนนงนุช" },
    { value: "46", label: "ชุมทางเขาชีจรรย์" },
    { value: "47", label: "บ้านพลูตาหลวง" },
    { value: "48", label: "พระปรง" },
    { value: "49", label: "บ้านแก้ง" },
    { value: "50", label: "ศาลาลำดวน" },
    { value: "51", label: "สระแก้ว" },
    { value: "52", label: "ท่าเกษม" },
    { value: "53", label: "ห้วยโจด" },
    { value: "54", label: "วัฒนานคร" },
    { value: "55", label: "ห้วยเดื่อ" },
    { value: "56", label: "อรัญประเทศ" },

  ]);

  return (  <View style={styles.homeBG}>
      <View style={styles.home2}>
      <ScrollView>
      <View style={styles.ScrollViewData}>
      {items.map(item => (
        <View style={{height: 140}}>
        <Pressable style={styles.homeTrainINFO} onPress={() => onPressDetail(item.number,item.name,item.nameDes,item.time,item.timeDes)}>
        <View style={styles.groupView5}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
        </View>
        <Text style={styles.oRDINARY2}>{`รถไฟรางปกติ `}</Text>
        <Text style={styles.nO283}>เลขขบวน {item.number}</Text>
        <Image
          style={styles.vectorIcon2}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanPluTaLuang}>
          {item.name} - {item.nameDes}
        </Text>
        <View style={styles.groupView6}>
          <Text style={styles.nameBox}>{item.name}</Text>
          <Text style={styles.timeBox}>{item.time}</Text>
          <Text style={styles.timeDesBox}>{item.timeDes}</Text>
          <Text style={styles.nameDesBox}>{item.nameDes}</Text>
          <Image
            style={styles.arrowIcon2}
            resizeMode="cover"
            source={require("../assets/arrow-2.png")}
            />
          </View>
        </Pressable>
      </View>
      ))}
      </View>
      </ScrollView>
      <View style={styles.BGAvailable}>
      </View>
        <View style={styles.groupView}>
        <View style={styles.homeBGOR} />
        <Text style={styles.home}>หน้าหลัก</Text>
        <Text style={styles.welcomeToTrainjung}>ยินดีตอนรับเข้าสู่ Trainjung</Text>
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
      <Text style={styles.available}>รถที่พร้อมบริการ</Text>
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group-91.png")}
      />
      <Pressable
        style={styles.bottomTab}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.home1}>
          <Text style={styles.labelText}>หน้าหลัก</Text>
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
          <Text style={styles.labelText1}>ค้นหา</Text>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
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
          <Text style={styles.labelText3}>บุ๊กมาร์ก</Text>
        </Pressable>
      </Pressable>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 87,
  },
  dropDownHomeValue: {
    color: "#030303",
    fontSize: 15,
    fontFamily: "Istok Web",
  },
  dropDownHomeText: {
    color: "#000000",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  notiBotton: {
    position: "absolute",
    left: 270,
    top: 85,
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
    shadowColor: "rgba(19, 19, 19, 1)",
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
    top: 27,
    left: 42,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO283: {
    position: "absolute",
    top: 8,
    left: 42,
    fontSize: 15,
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
  nameBox: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  timeBox: {
    position: "absolute",
    top: 20,
    left: 12,
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
  timeDesBox: {
    position: "absolute",
    top: 20,
    left: 182,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#352555",
    textAlign: "center",
  },
  nameDesBox: {
    position: "absolute",
    top: 0,
    left: 155,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  arrowIcon2: {
    position: "absolute",
    top: 19,
    left: 63,
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
    height: "13%",
    width: "5.42%",
    top: "11.3%",
    right: "89.53%",
    bottom: "68.7%",
    left: "88.05%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  labelText: {
    position: "absolute",
    height: "43.24%",
    width: "100%",
    top: "56.76%",
    left: "0%",
    fontSize: 10,
    letterSpacing: 1,
    lineHeight: 17,
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
    lineHeight: 17,
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
    fontSize: 9,
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
  ScrollViewData: {
    top: -10,
    left: 0,
    position: "relative",
    flex: 1,
    width: "100%",
    height: 2200,
    overflow: "hidden",
  },
  BGAvailable: {
    position: "absolute",
    top: -10,
    left: 0,
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
  },
  homeBG: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
  },
});

export default Home;
