import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";
import { allElementsTable } from "../constants/tableElements.js";
import Element from "../components/Element.js";

export default function AllElements({ route, navigation }) {
  const [filteredElements, setFilteredElements] = useState(allElementsTable);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Teko_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function filterElements(filterType) {
    if (filterType != "all") {
      setFilteredElements(
        allElementsTable.filter((element) => {
          return element.standardState.includes(filterType);
        })
      );
    } else {
      setFilteredElements(allElementsTable);
    }
    
    console.log(filteredElements);
  }

  function changeToGameScreen() {
    navigation.navigate("GameElements");
  }

  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable
          onPress={filterElements.bind(this, "all")}
          style={styles.buttonStyle}
        >
          <Text>ALL</Text>
        </Pressable>
        <Pressable
          onPress={filterElements.bind(this, "gas")}
          style={styles.buttonStyle}
        >
          <Text>GAS</Text>
        </Pressable>
        <Pressable
          onPress={filterElements.bind(this, "liquid")}
          style={styles.buttonStyle}
        >
          <Text>LIQUID</Text>
        </Pressable>
        <Pressable
          onPress={filterElements.bind(this, "solid")}
          style={styles.buttonStyle}
        >
          <Text>SOLID</Text>
        </Pressable>
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Pressable onPress={changeToGameScreen} style={styles.buttonStyle}>
          <Text>GAME</Text>
        </Pressable>
      </View>
      <View style={styles.centerList}>
        <FlatList
          data={filteredElements}
          renderItem={({ item }) => {
            return <Element props={item}></Element>;
          }}
          keyExtractor={(item) => {
            return item.elementNumber;
          }}
          numColumns={3}
          horizontal={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centerList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    fontFamily: "Teko_700Bold",
    backgroundColor: "#333333",
    width: "20%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
