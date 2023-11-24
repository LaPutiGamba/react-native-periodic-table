import { StyleSheet, View, Text } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";

export default function DetailsElement({ route, navigation }) {
  // navigation.setOptions({

  // });

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Teko_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View
        style={[
          route.params.element.elementType == "Gas"
            ? { ...styles.elementNameHeader, backgroundColor: "#da5858" }
            : route.params.element.elementType == "Líquid"
            ? { ...styles.elementNameHeader, backgroundColor: "#34aeeb" }
            : route.params.element.elementType == "Sòlid"
            ? { ...styles.elementNameHeader, backgroundColor: "#a9a9a9" }
            : { ...styles.elementNameHeader, backgroundColor: "#ffffff" },
          { flex: 1 },
        ]}
      >
        <Text>{route.params.element.elementName}</Text>
        <Text>Element character: {route.params.element.elementChar}</Text>
        <Text>Element number: {route.params.element.elementNumber}</Text>
        <Text>Element atom: {route.params.element.elementAtom}</Text>
        <Text>Element type: {route.params.element.elementType}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  elementNameHeader: {
    color: "white",
    fontSize: 25,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
