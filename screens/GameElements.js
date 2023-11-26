import { Pressable, TextInput, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";
import { allElementsTable } from "../constants/tableElements.js";
import Element from "../components/Element.js";

export default function GameElements({ route, navigation }) {
  const [result, setResult] = useState("Hydrogen");

  function checkResult() {
    setResult(result.charAt(0).toUpperCase() + result.slice(1).toLowerCase());
    if (allElementsTable[0].name == result) {
      alert("You are right!");
    } else {
      alert("You are wrong! The element was " + allElementsTable[0].name + ".");
    }

    selectedElement = allElementsTable[Math.floor(Math.random() * 118)];
  }

  let selectedElement = allElementsTable[Math.floor(Math.random() * 118)];

  return (
    <>
      <View style={styles.container}>
        <Element props={allElementsTable[0]} />
        <TextInput
          style={styles.textInputs}
          placeholder="Write the name of the element"
          onChangeText={setResult}
        />
        <Pressable onPress={checkResult} style={styles.sendButton}>
          <Text style={styles.textButton}>Send data</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2c2c2",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputs: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
  sendButton: {
    marginTop: 10,
    backgroundColor: "#f0a9f5",
    borderRadius: 10,
    padding: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
