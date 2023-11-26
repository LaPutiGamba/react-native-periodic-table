import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";

export default function Element({ props }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Teko_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  function sendElement() {
    navigation.navigate("DetailsElement", { element: props });
  }

  return (
    <View style={styles.globalStyle}>
      <Pressable
        onPress={sendElement}
        style={({ pressed }) => {
          return pressed
            ? { ...styles.pressableStyle, backgroundColor: "#737373" }
            : { ...styles.pressableStyle, backgroundColor: "#333333" };
        }}
      >
        <View style={styles.numberAndAtomContainer}>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.elementNumberStyle}>{props.atomicNumber}</Text>
          </View>
          <View style={{ marginTop: 9 }}>
            <Text style={styles.elementAtomStyle}>{props.atomicMass}</Text>
          </View>
        </View>
        <Text style={styles.elementSymbolStyle}>{props.symbol}</Text>
        <Text style={styles.elementNameStyle}>{props.name}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  globalStyle: {
    margin: "1.5%",
  },
  pressableStyle: {
    flexDirection: "column",
    width: 110,
    height: 110,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  numberAndAtomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  elementSymbolStyle: {
    color: "white",
    fontSize: 40,
    fontFamily: "Teko_700Bold",
  },
  elementNameStyle: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    paddingBottom: 16,
  },
  elementAtomStyle: {
    color: "white",
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
  },
  elementNumberStyle: {
    color: "white",
    fontSize: 25,
    fontFamily: "Poppins_400Regular",
  },
});
