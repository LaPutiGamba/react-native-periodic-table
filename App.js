import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllElements from "./screens/AllElements";
import DetailsElement from "./screens/DetailsElement";
import GameElements from "./screens/GameElements";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#000000" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#c2c2c2" },
          }}
        >
          <Stack.Screen
            name="AllElements"
            options={{
            title: "Watch all the elements of the Periodic Table!",
            }}
            component={AllElements}
          />
          <Stack.Screen
            name="DetailsElement"
            options={{
              title: "Watch all the information of the element!",
            }}
            component={DetailsElement}
          />
          <Stack.Screen
            name="GameElements"
            options={{
              title: "Play with the elements!",
            }}
            component={GameElements}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}