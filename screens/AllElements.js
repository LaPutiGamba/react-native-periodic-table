import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import Element from "../components/Element.js";

export default function AllElements({ route, navigation }) {
  const allElementsTable = [
    {
      elementNumber: 1,
      elementSymbol: "H",
      elementName: "Hidrogen",
      elementAtom: "1,008",
      elementType: "Gas",
    },
    {
      elementNumber: 2,
      elementSymbol: "He",
      elementName: "Heli",
      elementAtom: "4,0026",
      elementType: "Gas",
    },
    {
      elementNumber: 3,
      elementSymbol: "Li",
      elementName: "Liti",
      elementAtom: "6,94",
      elementType: "Sòlid",
    },
    {
      elementNumber: 4,
      elementSymbol: "Be",
      elementName: "Beril·li",
      elementAtom: "9,0122",
      elementType: "Sòlid",
    },
    {
      elementNumber: 5,
      elementSymbol: "B",
      elementName: "Bor",
      elementAtom: "10,81",
      elementType: "Sòlid",
    },
    {
      elementNumber: 6,
      elementSymbol: "C",
      elementName: "Carboni",
      elementAtom: "12,011",
      elementType: "Sòlid",
    },
    {
      elementNumber: 7,
      elementSymbol: "N",
      elementName: "Nitrogen",
      elementAtom: "14,007",
      elementType: "Gas",
    },
    {
      elementNumber: 8,
      elementSymbol: "O",
      elementName: "Oxigen",
      elementAtom: "15,999",
      elementType: "Gas",
    },
    {
      elementNumber: 9,
      elementSymbol: "F",
      elementName: "Fluor",
      elementAtom: "18,998",
      elementType: "Gas",
    },
    {
      elementNumber: 10,
      elementSymbol: "Ne",
      elementName: "Neó",
      elementAtom: "20,180",
      elementType: "Gas",
    },
    {
      elementNumber: 11,
      elementSymbol: "Na",
      elementName: "Sodi",
      elementAtom: "22,990",
      elementType: "Sòlid",
    },
    {
      elementNumber: 12,
      elementSymbol: "Mg",
      elementName: "Magnesi",
      elementAtom: "24,305",
      elementType: "Sòlid",
    },
    {
      elementNumber: 13,
      elementSymbol: "Al",
      elementName: "Alumini",
      elementAtom: "26,982",
      elementType: "Sòlid",
    },
    {
      elementNumber: 14,
      elementSymbol: "Si",
      elementName: "Silici",
      elementAtom: "28,085",
      elementType: "Sòlid",
    },
    {
      elementNumber: 15,
      elementSymbol: "P",
      elementName: "Fòsfor",
      elementAtom: "30,974",
      elementType: "Sòlid",
    },
    {
      elementNumber: 16,
      elementSymbol: "S",
      elementName: "Sofre",
      elementAtom: "32,06",
      elementType: "Sòlid",
    },
    {
      elementNumber: 17,
      elementSymbol: "Cl",
      elementName: "Clor",
      elementAtom: "35,45",
      elementType: "Gas",
    },
    {
      elementNumber: 18,
      elementSymbol: "Ar",
      elementName: "Argó",
      elementAtom: "39,948",
      elementType: "Gas",
    },
    {
      elementNumber: 19,
      elementSymbol: "K",
      elementName: "Potasi",
      elementAtom: "39,098",
      elementType: "Sòlid",
    },
    {
      elementNumber: 20,
      elementSymbol: "Ca",
      elementName: "Calci",
      elementAtom: "40,078",
      elementType: "Sòlid",
    },
    {
      elementNumber: 21,
      elementSymbol: "Sc",
      elementName: "Escandi",
      elementAtom: "44,956",
      elementType: "Sòlid",
    },
    {
      elementNumber: 22,
      elementSymbol: "Ti",
      elementName: "Titani",
      elementAtom: "47,867",
      elementType: "Sòlid",
    },
    {
      elementNumber: 23,
      elementSymbol: "V",
      elementName: "Vanadi",
      elementAtom: "50,942",
      elementType: "Sòlid",
    },
    {
      elementNumber: 24,
      elementSymbol: "Cr",
      elementName: "Crom",
      elementAtom: "51,996",
      elementType: "Sòlid",
    },
    {
      elementNumber: 25,
      elementSymbol: "Mn",
      elementName: "Manganès",
      elementAtom: "54,938",
      elementType: "Sòlid",
    },
    {
      elementNumber: 26,
      elementSymbol: "Fe",
      elementName: "Ferro",
      elementAtom: "55,845",
      elementType: "Sòlid",
    },
    {
      elementNumber: 27,
      elementSymbol: "Co",
      elementName: "Cobalt",
      elementAtom: "58,933",
      elementType: "Sòlid",
    },
    {
      elementNumber: 28,
      elementSymbol: "Ni",
      elementName: "Níquel",
      elementAtom: "58,693",
      elementType: "Sòlid",
    },
    {
      elementNumber: 29,
      elementSymbol: "Cu",
      elementName: "Coure",
      elementAtom: "63,546",
      elementType: "Sòlid",
    },
    {
      elementNumber: 30,
      elementSymbol: "Zn",
      elementName: "Zinc",
      elementAtom: "65,38",
      elementType: "Sòlid",
    },
    {
      elementNumber: 31,
      elementSymbol: "Ga",
      elementName: "Gal·li",
      elementAtom: "69,723",
      elementType: "Sòlid",
    },
    {
      elementNumber: 32,
      elementSymbol: "Ge",
      elementName: "Germani",
      elementAtom: "72,630",
      elementType: "Sòlid",
    },
    {
      elementNumber: 33,
      elementSymbol: "As",
      elementName: "Arsènic",
      elementAtom: "74,922",
      elementType: "Sòlid",
    },
    {
      elementNumber: 34,
      elementSymbol: "Se",
      elementName: "Seleni",
      elementAtom: "78,971",
      elementType: "Sòlid",
    },
    {
      elementNumber: 35,
      elementSymbol: "Br",
      elementName: "Brom",
      elementAtom: "79,904",
      elementType: "Gas",
    },
    {
      elementNumber: 36,
      elementSymbol: "Kr",
      elementName: "Criptó",
      elementAtom: "83,798",
      elementType: "Líquid",
    },
  ];

  const [filteredElements, setFilteredElements] = useState(allElementsTable);

  function filterElements(filterType) {
    if (filterType != "All") {
      setFilteredElements(
        allElementsTable.filter((element) => {
          return element.elementType.includes(filterType);
        })
      );
    } else {
      setFilteredElements(allElementsTable);
    }
  }

  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable onPress={filterElements.bind(this, "All")}>
          <Text>All</Text>
        </Pressable>
        <Pressable onPress={filterElements.bind(this, "Gas")}>
          <Text>Gas</Text>
        </Pressable>
        <Pressable onPress={filterElements.bind(this, "Líquid")}>
          <Text>Líquid</Text>
        </Pressable>
        <Pressable onPress={filterElements.bind(this, "Sòlid")}>
          <Text>Sòlid</Text>
        </Pressable>
      </View>
      <View style={styles.centerList}>
        <FlatList
          data={filteredElements}
          renderItem={({ item }) => {
            return (
              <Element props={item}></Element>
            );
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
});
