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

const TimeTable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.timeTable1}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Detail")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.timeTable}>Time Table</Text>
      <View style={styles.ststus}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
        </View>
        <Text style={styles.oRDINARY}>{`ORDINARY `}</Text>
        <Text style={styles.nO275}>{`NO.275 `}</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={styles.bangkokBanKlongLukBorder}>
          Bangkok - Ban Klong Luk Border
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.view}>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon1}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <View style={styles.lineView} />
          <Image
            style={styles.lineIcon2}
            resizeMode="cover"
            source={require("../assets/line-3.png")}
          />
          <Image
            style={styles.lineIcon3}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon4}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon5}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon6}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon7}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon8}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon9}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon10}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon11}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon12}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon13}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.lineIcon14}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon15}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon16}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon17}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon18}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon19}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon20}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon21}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon22}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon23}
            resizeMode="cover"
            source={require("../assets/line-28.png")}
          />
          <Image
            style={styles.lineIcon24}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon25}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon26}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon27}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon28}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon29}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon30}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon31}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon32}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <Image
            style={styles.lineIcon33}
            resizeMode="cover"
            source={require("../assets/line-7.png")}
          />
          <View style={styles.no275}>
            <Text style={styles.text31}>
              <Text style={styles.text}>1</Text>
              <Text style={styles.text1}>2</Text>
              <Text style={styles.text2}>3</Text>
              <Text style={styles.text3}>4</Text>
              <Text style={styles.text4}>5</Text>
              <Text style={styles.text5}>6</Text>
              <Text style={styles.text6}>7</Text>
              <Text style={styles.text7}>8</Text>
              <Text style={styles.text8}>9</Text>
              <Text style={styles.text9}>10</Text>
              <Text style={styles.text10}>11</Text>
              <Text style={styles.text11}>12</Text>
              <Text style={styles.text12}>13</Text>
              <Text style={styles.text13}>14</Text>
              <Text style={styles.text14}>15</Text>
              <Text style={styles.text15}>16</Text>
              <Text style={styles.text16}>17</Text>
              <Text style={styles.text17}>18</Text>
              <Text style={styles.text18}>19</Text>
              <Text style={styles.text19}>20</Text>
              <Text style={styles.text20}>21</Text>
              <Text style={styles.text21}>22</Text>
              <Text style={styles.text22}>23</Text>
              <Text style={styles.text23}>24</Text>
              <Text style={styles.text24}>25</Text>
              <Text style={styles.text25}>26</Text>
              <Text style={styles.text26}>27</Text>
              <Text style={styles.text27}>28</Text>
              <Text style={styles.text28}>29</Text>
              <Text style={styles.text29}>30</Text>
              <Text style={styles.text30}>31</Text>
            </Text>
            <Text style={styles.bangkokPhayathaiMarkesanAso}>
              <Text style={styles.bangkok}>Bangkok</Text>
              <Text style={styles.phayathai}>Phayathai</Text>
              <Text style={styles.markesan}>Markesan</Text>
              <Text style={styles.asoke}>Asoke</Text>
              <Text style={styles.khlongTan}>Khlong Tan</Text>
              <Text style={styles.huaMak}>Hua Mak</Text>
              <Text style={styles.banThapChang}>Ban Thap Chang</Text>
              <Text style={styles.soiWatLan}>Soi Wat Lan Boon</Text>
              <Text style={styles.latKrabang}>Lat Krabang</Text>
              <Text style={styles.praChomKlao}>Pra Chom Klao</Text>
              <Text style={styles.huaTakhe}>Hua Takhe</Text>
              <Text style={styles.khlongLuangPhaeng}>Khlong Luang Phaeng</Text>
              <Text style={styles.klongUdomChonlajorn}>
                Klong Udom Chonlajorn
              </Text>
              <Text style={styles.preng}>Preng</Text>
              <Text style={styles.klongKwaengKlan}>Klong Kwaeng Klan</Text>
            </Text>
            <Text style={styles.text47}>
              <Text style={styles.text32}>-</Text>
              <Text style={styles.text33}>6:09</Text>
              <Text style={styles.text34}>6:19</Text>
              <Text style={styles.text35}>6:25</Text>
              <Text style={styles.text36}>6:35</Text>
              <Text style={styles.text37}>6:42</Text>
              <Text style={styles.text38}>6:47</Text>
              <Text style={styles.text39}>6:51</Text>
              <Text style={styles.text40}>6:54</Text>
              <Text style={styles.text41}>6:59</Text>
              <Text style={styles.text42}>7:02</Text>
              <Text style={styles.text43}>7:10</Text>
              <Text style={styles.text44}>7:14</Text>
              <Text style={styles.text45}>7:18</Text>
              <Text style={styles.text46}>7:23</Text>
            </Text>
            <Text style={styles.text63}>
              <Text style={styles.text48}>5:55</Text>
              <Text style={styles.text49}>6:10</Text>
              <Text style={styles.text50}>6:20</Text>
              <Text style={styles.text51}>6:26</Text>
              <Text style={styles.text52}>6:36</Text>
              <Text style={styles.text53}>6:43</Text>
              <Text style={styles.text54}>6:48</Text>
              <Text style={styles.text55}>6:52</Text>
              <Text style={styles.text56}>6:55</Text>
              <Text style={styles.text57}>7:00</Text>
              <Text style={styles.text58}>7:03</Text>
              <Text style={styles.text59}>7:11</Text>
              <Text style={styles.text60}>7:15</Text>
              <Text style={styles.text61}>7:19</Text>
              <Text style={styles.text62}>7:24</Text>
            </Text>
            <Text style={styles.khlongBangPhraBangToeyCha}>
              <Text style={styles.khlongBangPhra}>Khlong Bang Phra</Text>
              <Text style={styles.bangToey}>Bang Toey</Text>
              <Text style={styles.chachoengsaoJunction}>
                Chachoengsao Junction
              </Text>
              <Text style={styles.phrongAkat}>Phrong Akat</Text>
              <Text style={styles.bangNamPrieo}>Bang Nam Prieo</Text>
              <Text style={styles.khlongSipKao}> Khlong Sip Kao Junction</Text>
              <Text style={styles.khlongYiSip}>Khlong Yi Sip Et</Text>
              <Text style={styles.yothaka}>Yothaka</Text>
              <Text style={styles.banSang}>Ban Sang</Text>
              <Text style={styles.nongNamKhao}>Nong Nam Khao</Text>
              <Text style={styles.banPakPhli}>Ban Pak Phli</Text>
              <Text style={styles.prachinBuri}>Prachin Buri</Text>
              <Text style={styles.khokMakok}>Khok Makok</Text>
              <Text style={styles.prachantakham}>Prachantakham</Text>
              <Text style={styles.nongSaeng}>Nong Saeng</Text>
              <Text style={styles.banDongBang}>Ban Dong Bang</Text>
              <Text style={styles.blankLine}> </Text>
            </Text>
            <Text style={styles.text80}>
              <Text style={styles.text64}>7:27</Text>
              <Text style={styles.text65}>7:30</Text>
              <Text style={styles.text66}>7:36</Text>
              <Text style={styles.text67}>7:51</Text>
              <Text style={styles.text68}>7:56</Text>
              <Text style={styles.text69}>7:56</Text>
              <Text style={styles.text70}>8:03</Text>
              <Text style={styles.text71}>8:11</Text>
              <Text style={styles.text72}>8:17</Text>
              <Text style={styles.text73}>8:25</Text>
              <Text style={styles.text74}>8:32</Text>
              <Text style={styles.text75}>8:38</Text>
              <Text style={styles.text76}>8:45</Text>
              <Text style={styles.text77}>8:54</Text>
              <Text style={styles.text78}>9:01</Text>
              <Text style={styles.text79}>9:10</Text>
            </Text>
            <Text style={styles.text97}>
              <Text style={styles.text81}>7:28</Text>
              <Text style={styles.text82}>7:31</Text>
              <Text style={styles.text83}>7:40</Text>
              <Text style={styles.text84}>7:52</Text>
              <Text style={styles.text85}>7:57</Text>
              <Text style={styles.text86}>8:07</Text>
              <Text style={styles.text87}>8:12</Text>
              <Text style={styles.text88}>8:18</Text>
              <Text style={styles.text89}>8:26</Text>
              <Text style={styles.text90}>8:33</Text>
              <Text style={styles.text91}>8:39</Text>
              <Text style={styles.text92}>8:46</Text>
              <Text style={styles.text93}>8:55</Text>
              <Text style={styles.text94}>9:05</Text>
              <Text style={styles.text95}>9:11</Text>
              <Text style={styles.text96}>9:16</Text>
            </Text>
            <Text style={styles.text114}>
              <Text style={styles.text98}>32</Text>
              <Text style={styles.text99}>33</Text>
              <Text style={styles.text100}>34</Text>
              <Text style={styles.text101}>35</Text>
              <Text style={styles.text102}>36</Text>
              <Text style={styles.text103}>37</Text>
              <Text style={styles.text104}>38</Text>
              <Text style={styles.text105}>39</Text>
              <Text style={styles.text106}>40</Text>
              <Text style={styles.text107}>41</Text>
              <Text style={styles.text108}>42</Text>
              <Text style={styles.text109}>43</Text>
              <Text style={styles.text110}>44</Text>
              <Text style={styles.text111}>45</Text>
              <Text style={styles.text112}>46</Text>
              <Text style={styles.text113}>47</Text>
            </Text>
            <Text style={styles.banPhromSaengBanKoDaengK}>
              <Text style={styles.banPhromSaeng}>Ban Phrom Saeng</Text>
              <Text style={styles.banKoDaeng}>Ban Ko Daeng</Text>
              <Text style={styles.kabinBuri}>Kabin Buri</Text>
              <Text style={styles.kabinKao}>Kabin Kao</Text>
              <Text style={styles.nongSang}>Nong Sang</Text>
              <Text style={styles.phraProng}>Phra Prong</Text>
              <Text style={styles.banKaeng}>Ban Kaeng</Text>
              <Text style={styles.salaLamduan}>Sala Lamduan</Text>
              <Text style={styles.saKaeo}>Sa Kaeo</Text>
              <Text style={styles.thaKasem}>Tha Kasem</Text>
              <Text style={styles.huaiChot}>Huai Chot</Text>
              <Text style={styles.watthanaNakhon}>Watthana Nakhon</Text>
              <Text style={styles.banPongKom}>Ban Pong Kom</Text>
              <Text style={styles.huaiDua}>Huai Dua</Text>
              <Text style={styles.aranyaprathet}>Aranyaprathet</Text>
              <Text style={styles.banKlongLuk}>Ban Klong Luk Border</Text>
            </Text>
            <Text style={styles.text131}>
              <Text style={styles.text115}>9:15</Text>
              <Text style={styles.text116}>9:21</Text>
              <Text style={styles.text117}>9:32</Text>
              <Text style={styles.text118}>9:37</Text>
              <Text style={styles.text119}>9:45</Text>
              <Text style={styles.text120}>9:55</Text>
              <Text style={styles.text121}>10:02</Text>
              <Text style={styles.text122}>10:08</Text>
              <Text style={styles.text123}>10:17</Text>
              <Text style={styles.text124}>10:30</Text>
              <Text style={styles.text125}>10:37</Text>
              <Text style={styles.text126}>10:47</Text>
              <Text style={styles.text127}>10:54</Text>
              <Text style={styles.text128}>11:00</Text>
              <Text style={styles.text129}>11:10</Text>
              <Text style={styles.text130}>11:17</Text>
            </Text>
            <Text style={styles.text148}>
              <Text style={styles.text132}>9:22</Text>
              <Text style={styles.text133}>9:27</Text>
              <Text style={styles.text134}>9:33</Text>
              <Text style={styles.text135}>9:38</Text>
              <Text style={styles.text136}>9:46</Text>
              <Text style={styles.text137}>9:56</Text>
              <Text style={styles.text138}>10:03</Text>
              <Text style={styles.text139}>10:09</Text>
              <Text style={styles.text140}>10:18</Text>
              <Text style={styles.text141}>10:31</Text>
              <Text style={styles.text142}>10:38</Text>
              <Text style={styles.text143}>10:48</Text>
              <Text style={styles.text144}>10:55</Text>
              <Text style={styles.text145}>11:01</Text>
              <Text style={styles.text146}>11:11</Text>
              <Text style={styles.text147}>-</Text>
            </Text>
            <Image
              style={styles.lineIcon34}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon35}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon36}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon37}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon38}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon39}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon40}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon41}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon42}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon43}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon44}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon45}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon46}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
            <Image
              style={styles.lineIcon47}
              resizeMode="cover"
              source={require("../assets/line-281.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.groupView1}>
          <View style={styles.rectangleView2} />
          <Text style={styles.station}>Station</Text>
          <Text style={styles.arr}>Arr.</Text>
          <Text style={styles.dep}>Dep.</Text>
          <Text style={styles.no}>No</Text>
        </View>
      </View>
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
    left: 38,
    width: 281,
    height: 22,
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
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default TimeTable;
