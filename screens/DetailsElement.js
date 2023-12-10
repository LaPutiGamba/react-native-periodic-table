import { StyleSheet, Linking, Pressable, View, Text } from "react-native";
import { useCallback } from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Teko_700Bold } from "@expo-google-fonts/teko";

export default function DetailsElement({ route, navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Teko_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) await Linking.openURL(url);
      else Alert.alert(`Don't know how to open this URL: ${url}`);
    }, [url]);

    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          title={children}
          onPress={handlePress}
          style={styles.urlButtonStyle}
        >
          <Text
            style={[
              {
                ...styles.basicStyleElement,
                color: "#f0a9f5",
                fontWeight: "bold",
                fontFamily: "Poppins_400Regular",
                boxShadow: "10px 10px 15px 0px rgba(0,0,0,0.7)",
                fontSize: 25,
              },
            ]}
          >
            {route.params.element.name}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <View
        style={[
          { flex: 1, backgroundColor: "#" + route.params.element.cpkHexColor + "66"},
        ]}
      >
        <Text style={styles.elementNameHeader}>
          {route.params.element.name}
        </Text>
        <Text style={styles.basicStyleElement}>
          Atomic Number: {route.params.element.atomicNumber}
        </Text>
        <Text style={styles.basicStyleElement}>
          Symbol: {route.params.element.symbol}
        </Text>
        <Text style={styles.basicStyleElement}>
          Atomic Mass: {route.params.element.atomicMass}
        </Text>
        <Text style={styles.basicStyleElement}>
          Electronic Configuration:{" "}
          {route.params.element.electronicConfiguration}
        </Text>
        <Text style={styles.basicStyleElement}>
          Electronegativity: {route.params.element.electronegativity}
        </Text>
        <Text style={styles.basicStyleElement}>
          Atomic Radius: {route.params.element.atomicRadius}
        </Text>
        <Text style={styles.basicStyleElement}>
          Ion Radius: {route.params.element.ionRadius}
        </Text>
        <Text style={styles.basicStyleElement}>
          Van Der Waals Radius: {route.params.element.vanDerWaalsRadius}
        </Text>
        <Text style={styles.basicStyleElement}>
          Ionization Energy: {route.params.element.ionizationEnergy}
        </Text>
        <Text style={styles.basicStyleElement}>
          Electron Affinity: {route.params.element.electronAffinity}
        </Text>
        <Text style={styles.basicStyleElement}>
          Oxidation States: {route.params.element.oxidationStates}
        </Text>
        <Text style={styles.basicStyleElement}>
          Standard State: {route.params.element.standardState}
        </Text>
        <Text style={styles.basicStyleElement}>
          Bonding Type: {route.params.element.bondingType}
        </Text>
        <Text style={styles.basicStyleElement}>
          Melting Point: {route.params.element.meltingPoint}
        </Text>
        <Text style={styles.basicStyleElement}>
          Boiling Point: {route.params.element.boilingPoint}
        </Text>
        <Text style={styles.basicStyleElement}>
          Density: {route.params.element.density}
        </Text>
        <Text style={styles.basicStyleElement}>
          Group Block: {route.params.element.groupBlock}
        </Text>
        <Text style={styles.basicStyleElement}>
          Year Discovered: {route.params.element.yearDiscovered}
        </Text>
        <Text style={styles.basicStyleElement}>
          Block: {route.params.element.block}
        </Text>
        <OpenURLButton url={route.params.element.wikipediaLink}></OpenURLButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  elementNameHeader: {
    color: "black",
    fontSize: 40,
    fontFamily: "Teko_700Bold",
    textAlign: "center",
  },
  basicStyleElement: {
    marginLeft: "2.5%",
    color: "black",
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
  },
  urlButtonStyle: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
