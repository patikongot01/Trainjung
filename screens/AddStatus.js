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


const AddStatus = () => {
  const navigation = useNavigation();
  const [Number, setNumber] = useState('');
  const [From, setFrom] = useState('');
  const [Destination, setDestination] = useState('');
  const [Detail, setDetail] = useState('');
  const onPressDetail = (Number,From,Destination,Detail) => {
    navigation.navigate('AddStatus', { Number:Number,From:From,Destination:Destination,Detail:Detail });
  }

  return (
    <View style={styles.addStatus1}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.back}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/back.png")}
        />
   
      </Pressable>
      <View style={styles.rectangleView} />
      <TextInput
        style={styles.groupTextInput3}
        placeholder="Detail"
        keyboardType="default"
        placeholderTextColor="#b9bfb8"
        value={Detail}
      onChangeText={text => setDetail(text)}
      />
      <Pressable style={styles.buttonLogin}>
        
      </Pressable>
      <View style={styles.rectangleView1} />
      <TextInput
        style={styles.groupTextInput1}
        placeholder="Destination"
        keyboardType="default"
        placeholderTextColor="#b9bfb8"
        value={Destination}
      onChangeText={text => setDestination(text)}
      />
      <Pressable style={styles.buttonLogin}>
      </Pressable>
      <View style={styles.rectangleView2} />
      <TextInput
        style={styles.groupTextInput2}
        placeholder="From"
        keyboardType="default"
        placeholderTextColor="#b9bfb8"
        value={From}
      onChangeText={text => setFrom(text)}
        
      />
      <Pressable style={styles.buttonLogin}>
      </Pressable>
      <View style={styles.rectangleView3} />
      <TextInput
        style={styles.groupTextInput}
        placeholder="Number"
        keyboardType="default"
        placeholderTextColor="#b9bfb8"
        value={Number}
      onChangeText={text => setNumber(text)}
        maxLength={3}
      />
     <Pressable
  style={styles.buttonLogin}
  onPress={() => createNotification(Number, From, Destination, Detail)}>
  <View style={styles.backgroundButton} />
  <Text style={styles.sendNotification}>Send Notification</Text>
</Pressable>
      <Text style={styles.addStatus}>Add Status</Text>
      
      
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
    top: 270,
    left: 35,
    borderRadius: 10,
    backgroundColor: "#efecec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 300,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 180,
    left: 180,
    borderRadius: 10,
    backgroundColor: "#efecec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 100,
    height: 50,
  },
  rectangleView2: {
    position: "absolute",
    top: 180,
    left: 35,
    borderRadius: 10,
    backgroundColor: "#efecec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 100,
    height: 50,
  },
  rectangleView3: {
    position: "absolute",
    top: 100,
    left: 35,
    borderRadius: 10,
    backgroundColor: "#efecec",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 100,
    height: 50,
  },
  groupTextInput: {
    position: "absolute",
    top: 100,
    left: 46,
    width: 90,
    height: 58,
  },
  groupTextInput1: {
    position: "absolute",
    top: 180,
    left: 190,
    width: 80,
    height: 58,
  },
  groupTextInput2: {
    position: "absolute",
    top: 180,
    left: 46,
    width: 80,
    height: 58,
  },
  groupTextInput3: {
    position: "absolute",
    top: 270,
    left: 46,
    width: 280,
    height: 58,
  },
  backgroundButton: {
    position: "absolute",
    top: 50,
    left: 5,
    borderRadius: 10,
    backgroundColor: "#ff8a00",
    width: 141,
    height: 37,
  },
  sendNotification: {
    position: "absolute",
    top: 60,
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
