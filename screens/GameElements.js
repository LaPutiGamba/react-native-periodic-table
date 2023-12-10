import { Pressable, TextInput, StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";
import { allElementsTable } from "../constants/tableElements.js";
import GameElement from "../components/GameElement.js";

export default function GameElements({ route, navigation }) {
  const [selectedElement, setSelectedElement] = useState(allElementsTable[Math.floor(Math.random() * 118)]);
  const [result, setResult] = useState("");

  function checkResult() {
    const formattedResult = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    if (selectedElement.name == formattedResult) {
      alert("You are right!");
      setSelectedElement(allElementsTable[Math.floor(Math.random() * 118)]);
      setResult("");
    } else {
      alert("You are wrong! The element was " + selectedElement.name + ".");
      setSelectedElement(allElementsTable[Math.floor(Math.random() * 118)]);
      setResult("");
    }
  }

  return (
    <>
      <View style={styles.container}>
        <GameElement props={selectedElement} />
        <TextInput
          style={styles.textInputs}
          placeholder="Write the name of the element"
          value={result}
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
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  sendButton: {
    marginTop: 10,
    backgroundColor: "hsl(275, 80%, 60%)",
    borderRadius: 10,
    padding: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
});
