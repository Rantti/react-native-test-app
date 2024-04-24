import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FindPlayer from "./screens/FindPlayer";
import Matches from "./screens/Matches";

const Stack = createNativeStackNavigator();
const isMock = true;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={FindPlayer}
          options={{ title: "Welcome" }}
          initialParams={{ isMock }}
        />
        <Stack.Screen
          name="Matches"
          component={Matches}
          options={{ title: "Matches" }}
          initialParams={{ isMock }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
