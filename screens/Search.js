import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [buttonFromOpen, setButtonFromOpen] = useState(false);
  const [buttonFromValue, setButtonFromValue] = useState("");
  const [buttonFromItems, setButtonFromItems] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ]);
  const [buttonToOpen, setButtonToOpen] = useState(false);
  const [buttonToValue, setButtonToValue] = useState("");
  const [buttonToItems, setButtonToItems] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ]);
  const navigation = useNavigation();

  return ( <View style={styles.homeBG}>
    <View style={styles.search2}>
      <StatusBar barStyle="default" />
      <View style={styles.background} />
      <Text style={styles.form}>Form</Text>
      <Text style={styles.to}>To</Text>
      <Text style={styles.findYourTrainLetsMakeA}>
        <Text style={styles.findYourTrain}>Find your train,</Text>
        <Text style={styles.letsMakeA}>let’s make a journey.</Text>
      </Text>
      <View style={styles.dropDown}>
        <Pressable style={styles.buttonSearch} accessible="true">
          <View style={styles.backgroundButton} />
          <Text style={styles.search}>Search</Text>
        </Pressable>
        <View style={styles.buttonFrom}>
          <DropDownPicker
            open={buttonFromOpen}
            setOpen={setButtonFromOpen}
            value={buttonFromValue}
            setValue={setButtonFromValue}
            placeholder="Select your location"
            items={buttonFromItems}
            labelStyle={styles.buttonFromValue}
            dropDownDirection="TOP"
          />
        </View>
        <View style={styles.buttonTo}>
          <DropDownPicker
            open={buttonToOpen}
            setOpen={setButtonToOpen}
            value={buttonToValue}
            setValue={setButtonToValue}
            placeholder="Select destination"
            items={buttonToItems}
            labelStyle={styles.buttonToValue}
          />
        </View>
      </View>
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
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
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
        <View style={[styles.search1, styles.ml42]}>
          <Text style={styles.labelText1}>Search</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
        </View>
        <Pressable
          style={[styles.favourite, styles.ml42]}
          onPress={() => navigation.navigate("Favourite")}
        >
          <Text style={styles.labelText2}>Favourite</Text>
          <Image
            style={styles.vectorIcon1}
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
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFromValue: {
    minHeight:300,
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  buttonToValue: {
    color: "#b4b4b4",
    fontSize: 12,
    fontFamily: "Istok Web",
  },
  ml42: {
    marginLeft: 42,
  },
  background: {
    position: "absolute",
    top: 127,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(247, 142, 72, 0.8)",
    shadowColor: "rgba(218, 218, 218, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    width: 360,
    height: 673,
    opacity: 0.5,
  },
  to: {
    position: "absolute",
    top: 361,
    left: 30,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  form: {
    position: "absolute",
    top: 276,
    left: 29,
    fontSize: 12,
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
    width: 28,
  },
  findYourTrain: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  letsMakeA: {
    margin: 0,
  },
  findYourTrainLetsMakeA: {
    position: "absolute",
    top: 165,
    left: 28,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#000",
    textAlign: "center",
  },
  backgroundButton: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 300,
    height: 40,
  },
  search: {
    position: "absolute",
    top: 11,
    left: 117,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    width: 66,
    height: 17,
  },
  buttonSearch: {
    position: "absolute",
    top: 162,
    left: 0,
    width: 300,
    height: 40,
  },
  buttonFrom: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: 40,
  },
  buttonTo: {
    position: "absolute",
    top: 80,
    left: 0,
    width: 300,
    height: 40,
  },
  dropDown1: {
    minHeight: 300,
    position: "absolute",
    top: 299,
    left: 30,
    width: 300,
    height: 202,
  },
  dropDown: {
    position: "absolute",
    top: 299,
    left: 30,
    width: 300,
    height: 202,
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
  logoIcon: {
    position: "absolute",
    top: 550,
    left: 126,
    width: 108,
    height: 108,
    opacity: 0.4,
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
  vectorIcon: {
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
  search1: {
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
  search2: {
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

export default Search;
