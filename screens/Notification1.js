import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { ProgressBar as RNPProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeBG}>
    <View style={styles.notification}>
      <StatusBar barStyle="default" />
      <Text style={styles.notifications}>Notifications</Text>
      <Text style={styles.today}>Today</Text>
      <View style={styles.notidetailBG} />
      <View style={styles.status}>
        <RNPProgressBar
          style={styles.rNPProgressBar}
          progress={0.8}
          color="#ffce38"
        />
      </View>
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
      <Text style={styles.text}>{`06:10 `}</Text>
      <Text style={styles.onTime}>On time</Text>
      <Text style={styles.bangkokStation}>Phayathai Station</Text>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rNPProgressBar: {
    width: 218,
    height: 25,
    backgroundColor: "#fff",
  },
  notifications: {
    position: "absolute",
    top: 52,
    left: 105,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  today: {
    position: "absolute",
    width: "24.72%",
    top: "14.63%",
    left: "6.67%",
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 24,
    fontWeight: "900",
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  notidetailBG: {
    position: "absolute",
    top: 157,
    left: 20,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 322,
    height: 98,
  },
  status: {
    position: "absolute",
    top: 215,
    left: 63,
    width: 218,
    height: 25,
  },
  oRDINARY: {
    position: "absolute",
    top: 190,
    left: 71,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  nO279: {
    position: "absolute",
    top: 176,
    left: 71,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "3.20%",
    width: "5.28%",
    top: "23.53%",
    right: "84.72%",
    bottom: "75%",
    left: "10%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  bangkokBanKlongLukBorder: {
    position: "absolute",
    top: 190,
    left: 129,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  text: {
    position: "absolute",
    top: 225,
    left: 82,
    fontSize: 10,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  onTime: {
    position: "absolute",
    top: 218,
    left: 85,
    fontSize: 5,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  bangkokStation: {
    position: "absolute",
    marginLeft: -38,
    top: 220,
    left: "50%",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "left",
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
  notification: {
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

export default Notification1;
