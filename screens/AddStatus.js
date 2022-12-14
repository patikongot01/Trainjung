import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
  View,
  TextInput,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RadioButton as RNPRadioButton } from "react-native-paper";

const AddStatus = () => {
  const navigation = useNavigation();
  const [ellipseRadioValue, setEllipseRadioValue] = useState("O");

  return (
    <View style={styles.addStatus1}>
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
      <View style={styles.rectangleView} />
      <TextInput
        style={styles.groupTextInput}
        placeholder="Problem ..."
        keyboardType="default"
        placeholderTextColor="#b9bfb8"
      />
      <Pressable style={styles.buttonLogin}>
        <View style={styles.backgroundButton} />
        <Text style={styles.sendNotification}>Send Notification</Text>
      </Pressable>
      <Text style={styles.addStatus}>Add Status</Text>
      <Text style={styles.delays}>Delays</Text>
      <View style={styles.ellipseView}>
        <RNPRadioButton.Group
          value={ellipseRadioValue}
          onValueChange={setEllipseRadioValue}
        >
          <View>
            <View style={styles.view1}>
              <RNPRadioButton
                color="#6750a4"
                uncheckedColor="#49454f"
                value="On Time"
              />
              <Text>On Time</Text>
            </View>
            <View style={styles.view2}>
              <RNPRadioButton
                color="#6750a4"
                uncheckedColor="#49454f"
                value="Delay"
              />
              <Text>Delay</Text>
            </View>
          </View>
        </RNPRadioButton.Group>
      </View>
      <Text style={styles.onTime}>On Time</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseRadioText: {},
  view: {},
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
  rectangleView: {
    position: "absolute",
    top: 228,
    left: 35,
    borderRadius: 20,
    backgroundColor: "#efecec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 298,
    height: 78,
  },
  groupTextInput: {
    position: "absolute",
    top: 241,
    left: 46,
    width: 268,
    height: 58,
  },
  backgroundButton: {
    position: "absolute",
    top: 0,
    left: 5,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 141,
    height: 37,
  },
  sendNotification: {
    position: "absolute",
    top: 10,
    left: 15,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  buttonLogin: {
    position: "absolute",
    top: 341,
    left: 114,
    width: 141,
    height: 37,
  },
  addStatus: {
    position: "absolute",
    top: 61,
    left: 138,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#f05a22",
    textAlign: "center",
  },
  delays: {
    position: "absolute",
    top: 171,
    left: 79,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
    display: "none",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    top: -20,
    width: 141,
    height: 37,
    
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    top: -20,
    width: 141,
    height: 37,
    
  },
  ellipseView: {
    position: "absolute",
    top: 137,
    left: 46,
    width: 19,
    height: 19,
  },
  onTime: {
    position: "absolute",
    top: 137,
    left: 79,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#595959",
    textAlign: "center",
    display: "none",
  },
  addStatus1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AddStatus;
