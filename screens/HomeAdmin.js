//import * as React from "react";
import { FileSystem } from 'expo';
import {
  StatusBar,
  StyleSheet,
  Pressable,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation,navigate } from "@react-navigation/native";
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import LoginContext from './context/LoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
const HomeAdmin = () => {
  const navigation = useNavigation();
  const [stationName, setStationName] = useState('');
  const route = useRoute();
  const email = route.params.email;
  const password = route.params.password;
 
  

const createToken = async (email, password) => {
  try {
    const data = {
      grant_type: '',
      username: email,
      password: password,
      scope: '',
      client_id: '',
      client_secret: '',
    };

    const response = await axios.post('https://shark-app-wblp9.ondigitalocean.app/api/token', data, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-ID': String,
        'X-API-Password': String,
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

const fetchData = async () => {
  try {
    // Call the createToken function to get an access token
    const accessToken = await createToken(email, password);

    // Use the access token in the request
    const response = await axios.get('https://shark-app-wblp9.ondigitalocean.app/api/users/me', {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    const data = response.data;
    const stationName = data.stationName;
    setStationName(stationName);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchData();
}, []);

  
  return (
    <View style={styles.homeAdmin}>
      <StatusBar barStyle="default" />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("HomeAdmin3")}
      >
        <View style={styles.rectangleView} />
        <Text style={styles.trainjung}>Trainjung</Text>
        <Text style={styles.bangkokStation}>{stationName}</Text>
        <Text style={styles.admin}>Admin</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-33635.png")}
        />
      </Pressable>
      <TouchableOpacity
        style={styles.groupTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("AddStatus")}
      >
        <TouchableOpacity
          style={styles.rectangleTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("AddStatus")}
        />
        <Text style={styles.addStatus}>Edit Status</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 20,
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

justifyContent: 'center',
alignItems: 'center',
height: '100%',
  },
  trainjung: {
    position: "absolute",
    top: 32,
    left: 36,
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bangkokStation: {
    position: "absolute",
    top: 62,
    left: 36,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  admin: {
    position: "absolute",
    top: 20,
    left: 36,
    fontSize: 10,
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupIcon: {
    position: "absolute",
    top: 19,
    left: 256,
    width: 72,
    height: 72,
  },
  groupPressable: {
    position: "absolute",
    top: 76,
    left: 13,
    width: 331,
    height: 110,
  },
  rectangleTouchableOpacity: {
    position: "absolute",
    top: -200,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
    alignItems: "center",
    justifyContent: "center",
  },
  addStatus: {
    position: "absolute",
    top: -180,
    left: 21,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  groupTouchableOpacity: {
    position: "absolute",
    width: 250,
    height: 63,
    alignItems: "center",
    justifyContent: "center",
    top: 500,
    left: 115,
  },
  rectangleTouchableOpacity1: {
    position: "absolute",
    top: 100,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
  },
  edit: {
    position: "absolute",
    top: 17,
    left: 56,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupTouchableOpacity1: {
    position: "absolute",
    top: 277,
    left: 115,
    width: 150,
    height: 63,
 
  },
  rectangleTouchableOpacity2: {
    position: "absolute",
    top: 100,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f05a22",
    width: 150,
    height: 63,
  },
  addDelete: {
    position: "absolute",
    top: 18,
    left: 22,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Istok Web",
    color: "#fff",
    textAlign: "center",
  },
  groupPressable1: {
    position: "absolute",
    top: 373,
    left: 115,
    width: 150,
    height: 63,
  },
  homeAdmin: {
    position: "relative",
    backgroundColor: "#ffe9cf",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default HomeAdmin;
