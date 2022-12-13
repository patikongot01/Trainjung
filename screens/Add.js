import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const Add = () => {
  const navigation = useNavigation();
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [groupDropdownValue, setGroupDropdownValue] = useState("");
  const [groupDropdownItems, setGroupDropdownItems] = useState([
    { value: "1", label: "1" },
    { value: "23", label: "23" },
  ]);
  const [groupDropdown1Open, setGroupDropdown1Open] = useState(false);
  const [groupDropdown1Value, setGroupDropdown1Value] = useState("");
  const [groupDropdown1Items, setGroupDropdown1Items] = useState([
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ]);
  const [groupDropdown2Open, setGroupDropdown2Open] = useState(false);
  const [groupDropdown2Value, setGroupDropdown2Value] = useState("");
  const [groupDropdown2Items, setGroupDropdown2Items] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ]);
  const [groupDropdown3Open, setGroupDropdown3Open] = useState(false);
  const [groupDropdown3Value, setGroupDropdown3Value] = useState("");
  const [groupDropdown3Items, setGroupDropdown3Items] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ]);

  return (
    <View style={styles.add}>
      <View style={styles.background} />
      <StatusBar barStyle="default" />
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
      <Text style={styles.addDelete}>Add-Delete</Text>
      <View style={styles.groupView5}>
        <View style={styles.buttonFrom}>
          <Text style={styles.form}>Form</Text>
          <View style={styles.groupView}>
            <DropDownPicker
              open={groupDropdownOpen}
              setOpen={setGroupDropdownOpen}
              value={groupDropdownValue}
              setValue={setGroupDropdownValue}
              placeholder="Time"
              items={groupDropdownItems}
              labelStyle={styles.groupDropdownValue}
            />
          </View>
          <View style={styles.groupView1}>
            <DropDownPicker
              open={groupDropdown1Open}
              setOpen={setGroupDropdown1Open}
              value={groupDropdown1Value}
              setValue={setGroupDropdown1Value}
              placeholder="Time"
              items={groupDropdown1Items}
              labelStyle={styles.groupDropdown1Value}
            />
          </View>
          <View style={styles.groupView2}>
            <View style={styles.backgroundButton} />
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector4.png")}
            />
            <Text style={styles.selectYourLocation}>Select your location</Text>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector5.png")}
            />
          </View>
          <View style={styles.groupView3}>
            <DropDownPicker
              open={groupDropdown2Open}
              setOpen={setGroupDropdown2Open}
              value={groupDropdown2Value}
              setValue={setGroupDropdown2Value}
              placeholder="Select your location"
              items={groupDropdown2Items}
              labelStyle={styles.groupDropdown2Value}
            />
          </View>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
          <View style={styles.groupView4}>
            <DropDownPicker
              open={groupDropdown3Open}
              setOpen={setGroupDropdown3Open}
              value={groupDropdown3Value}
              setValue={setGroupDropdown3Value}
              placeholder="Select your location"
              items={groupDropdown3Items}
              labelStyle={styles.groupDropdown3Value}
            />
          </View>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={styles.buttonTo}>
          <Text style={styles.to}>To</Text>
          <View style={styles.train} />
        </View>
        <Pressable style={styles.buttonSearch}>
          <View style={styles.backgroundButton1} />
          <Text style={styles.addNewTime}>{`Add New Time `}</Text>
        </Pressable>
        <View style={styles.buttonSearch1}>
          <Pressable style={styles.backgroundButton2} />
          <Text style={styles.deleteThisTime}>Delete This Time</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupDropdownValue: {
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  groupDropdown1Value: {
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  groupDropdown2Value: {
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  groupDropdown3Value: {
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
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
  addDelete: {
    position: "absolute",
    top: 61,
    left: 127,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  form: {
    position: "absolute",
    top: 0,
    left: 5,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 28,
  },
  groupView: {
    position: "absolute",
    top: 86,
    left: 0,
    width: 130,
    height: 40,
  },
  groupView1: {
    position: "absolute",
    top: 236,
    left: 2,
    width: 130,
    height: 40,
  },
  backgroundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#b4b4b4",
    borderWidth: 0.5,
    width: 300,
    height: 40,
  },
  vectorIcon: {
    position: "absolute",
    height: "25%",
    width: "5.67%",
    top: "37.5%",
    right: "4.67%",
    bottom: "37.5%",
    left: "89.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  selectYourLocation: {
    position: "absolute",
    top: 13,
    left: 55,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#b4b4b4",
    textAlign: "center",
    width: 107,
  },
  vectorIcon1: {
    position: "absolute",
    height: "33.75%",
    width: "3.79%",
    top: "32.5%",
    right: "86.55%",
    bottom: "33.75%",
    left: "9.67%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    top: 23,
    left: 6,
    width: 300,
    height: 40,
  },
  groupView3: {
    position: "absolute",
    top: 23,
    left: 6,
    width: 300,
    height: 40,
  },
  vectorIcon2: {
    position: "absolute",
    height: "4.89%",
    width: "3.71%",
    top: "15.58%",
    right: "49.23%",
    bottom: "79.53%",
    left: "47.06%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView4: {
    position: "absolute",
    top: 161,
    left: 5,
    width: 300,
    height: 40,
  },
  vectorIcon3: {
    position: "absolute",
    height: "4.89%",
    width: "3.71%",
    top: "65.58%",
    right: "49.55%",
    bottom: "29.53%",
    left: "46.73%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  buttonFrom: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 306,
    height: 276,
  },
  to: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  train: {
    position: "absolute",
    top: 12,
    left: 23,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttonTo: {
    position: "absolute",
    top: 139,
    left: 6,
    width: 47,
    height: 36,
  },
  backgroundButton1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 300,
    height: 40,
  },
  addNewTime: {
    position: "absolute",
    top: 11,
    left: 98,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  buttonSearch: {
    position: "absolute",
    top: 489,
    left: 6,
    width: 300,
    height: 40,
  },
  backgroundButton2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 300,
    height: 40,
  },
  deleteThisTime: {
    position: "absolute",
    top: 11,
    left: 90,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  buttonSearch1: {
    position: "absolute",
    top: 541,
    left: 5,
    width: 300,
    height: 40,
  },
  groupView5: {
    position: "absolute",
    top: 145,
    left: 23,
    width: 306,
    height: 581,
  },
  add: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Add;
